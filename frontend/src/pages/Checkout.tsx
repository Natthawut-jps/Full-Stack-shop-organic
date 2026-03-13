import { FunctionComponent, useEffect, useState } from "react";
import { Foorter } from "./unities/Foorter";
import { Header } from "./unities/Header";
import { Breadcrumbs } from "./unities/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import instance_auth from "./unities/instance_auth";
import { CartContextProviders } from "./unities/HandleCart";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface addressType {
  id: number;
  first_name: string;
  last_name: string;
  company: string;
  street: string;
  county: string;
  tambon: string;
  states: string;
  zipCode: number;
  email: string;
  phone: string;
  status: number;
  createdAt: string;
}

const Checkout: FunctionComponent = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const { cartItems } = CartContextProviders();
  const [addressItem, setAddress] = useState<addressType[]>([]);
  const price = cartItems.map((item) => item.price);
  const priceSum = price.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  const handlerPlacement = async () => {
    if (addressItem.length > 0) {
      const quantity = cartItems.map((item) => item.quantity);
      const quantitySum = quantity.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
      const address_id = addressItem.find((item) => item.id);
      const amount_total = (priceSum + 50).toFixed(2);
      try {
        await instance_auth({
          method: "post",
          url: "/order/add",
          data: {
            amount_total: amount_total,
            address_id: address_id?.id,
            quantity: quantitySum,
          },
          responseType: "json",
          headers: {
            "Content-Type": "application/json",
          },
        }).then(async (res) => {
          if (res.status === 200) {
            const date = new Date();
            const time = new Date(date.setMinutes(date.getMinutes() + 5));
            navigate("/shop/checkout/bill", {
              state: { order_list: res.data, time_old: time },
            });
          }
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      return handleClickOpen();
    }
  };

  const address = async () => {
    try {
      await instance_auth({
        method: "get",
        url: "/address/all",
        responseType: "json",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.status === 200) {
          setAddress(() =>
            res.data.filter((item: addressType) => item.status === 1)
          );
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    address();
  }, []);

  return (
    <>
      <Header />
      <Breadcrumbs
        categoies={undefined}
        tltle={undefined}
        EditAndadd={undefined}
        Detail={undefined}
      />
      <div className=" p-4 box-border space-y-7 text-left text-sm text-gray-scale-gray-900 font-body-xxl-body-xxl-500">
        <div className=" text-lg font-medium">ข้อมูลคำสั่งซื้อ</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="drop-shadow-2xl flex flex-col gap-2">
            <div className="grid grid-cols-3 gap-2 items-center text-base justify-items-center bg-slate-300">
              <div>สินค้า</div>
              <div>จำนวน</div>
              <div>รวม</div>
            </div>
            <div className="flex flex-col gap-2 text-base">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className=" grid grid-cols-3 gap-2 items-center justify-items-center"
                >
                  <div className="flex flex-col gap-2">
                    <img
                      className=" w-full max-w-[100px] object-cover"
                      alt=""
                      src={
                        process.env.NEXT_PUBLIC_BASE_API + `/img/${item.imgURL}`
                      }
                    />
                    <div>{item.name}</div>
                  </div>
                  <div className=" ">{"x" + item.quantity}</div>
                  <div className="  font-medium">฿{item.price.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start justify-start h-fit p-4 box-border rounded-md border-[1px] border-solid border-gray-scale-gray-100">
            <div className="  ">
              {addressItem.map((item, index) => (
                <div key={index} className="     ">
                  <div className="   rounded-md bg-gray-scale-white box-border " />
                  <div className="box-border pl-[0px] flex flex-col gap-2">
                    <div>
                      <div className=" tracking-[0.03em] leading-[100%] uppercase font-medium  underline">
                        ชื่อผู้รับ
                      </div>
                      <div className="box-border text-base leading-[150%] text-gray-scale-gray-600 break-words">
                        {`${item.first_name} ${item.last_name}`}
                      </div>
                    </div>
                    <div>
                      <div className=" tracking-[0.03em] leading-[100%] uppercase font-medium underline ">
                        ที่อยู่จัดส่ง
                      </div>
                      <div className="  break-words box-border leading-[150%] text-gray-scale-gray-600 inline-block ">
                        {`${item.street}, ${item.county}, ${item.states},
                       ${item.tambon}, ${item.zipCode}`}
                      </div>
                    </div>
                    <div className="box-border flex flex-col items-start justify-start gap-y-[4px] text-base">
                      <div className=" tracking-[0.03em] leading-[100%] uppercase font-medium underline ">
                        เบอร์โทร
                      </div>
                      <div className=" break-words text-sm leading-[150%] text-gray-scale-gray-600 inline-block">
                        {item.phone}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="  h-fit rounded-lg bg-gray-scale-white flex flex-col items-start justify-start p-4 box-border gap-5 border-[1px] border-solid border-gray-scale-gray-100">
            <div className=" text-lg  font-medium">สรุปคำสั่งซื้อ</div>
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="flex flex-col items-start justify-start gap-2 text-gray-scale-gray-700">
                <div className="bg-gray-scale-white  flex flex-row items-center gap-4 justify-between box-border">
                  <div className=" ">รวม:</div>
                  <div className="  font-medium text-gray-scale-gray-900">
                    ฿{priceSum.toFixed(2)}
                  </div>
                </div>
                <div className="bg-gray-scale-white  flex flex-row items-center gap-4 justify-between box-border">
                  <div className=" ">ค่าจัดส่ง:</div>
                  <div className="  font-medium text-gray-scale-gray-900">
                    ฿50.00
                  </div>
                </div>
                <div className="bg-gray-scale-white  flex flex-row items-center gap-4 justify-between box-border text-base">
                  <div className=" ">ทั้งหมด:</div>
                  <div className=" text-base leading-[120%] font-semibold text-gray-scale-gray-900">
                    ฿{(priceSum + 50).toFixed(2)}
                  </div>
                </div>
              </div>
              <div className="text-base">
                <div className="font-medium">ชำระเงิน</div>
                <div className="flex flex-col items-start justify-start text-sm text-gray-scale-gray-700">
                  <div className=" ">Propmpay QR Code</div>
                </div>
              </div>
            </div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"ไม่มีที่อยู่ในการจัดส่ง"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  เพิ่มที่อยู่แล้วลองใหม่อีกครั้ง
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>ตกลง</Button>
              </DialogActions>
            </Dialog>
            <div
              onClick={handlerPlacement}
              className="cursor-pointer no-underline rounded-24xl bg-branding-success  flex flex-row items-center justify-center py-4 px-10 box-border text-base text-gray-scale-white"
            >
              <div className=" leading-[120%] font-semibold">สั่งซื้อ</div>
            </div>
          </div>
        </div>
      </div>
      <Foorter />
    </>
  );
};

export default Checkout;
