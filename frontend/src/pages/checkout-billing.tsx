import { FunctionComponent, useEffect, useState } from "react";
import { Foorter } from "./unities/Foorter";
import { Header } from "./unities/Header";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Rating,
  Snackbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";

interface productType {
  id: number;
  name: string;
  price: number;
  categories: string;
  quantity: number;
  imgURL: string;
  p_id: number;
  user_id: number;
  order_id: number;
  createdAt: Date;
  updatedAt: Date;
}

interface state_Type {
  order_list: [
    {
      id: number;
      name: string;
      price: number;
      categories: string;
      quantity: number;
      imgURL: string;
      p_id: number;
      user_id: number;
      order_id: number;
      createdAt: Date;
      updatedAt: Date;
    }
  ];
  time_old: Date;
}
interface timeout_Type {
  minutes: number;
  second: number;
}

interface reviewType {
  id: number;
  review: number;
}
export const Review = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [review, setReview] = useState<reviewType[]>([]);
  const product: state_Type = useLocation().state;
  const labels: { [index: string]: string } = {
    1: "แย่",
    2: "พอใช้",
    3: "ปานกลาง",
    4: "ดี",
    5: "ยอดเยี่อม",
  };

  return (
    <>
      <Snackbar
        open={open}
        onClose={() => (location.href = "/")}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          รีวิวสินค้าเรียบร้อยแล้ว
        </Alert>
      </Snackbar>
      <Dialog open={true} fullWidth>
        <IconButton
          onClick={() => (location.href = "/")}
          sx={{
            position: "",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle>รีวิวสินค้า</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: 3,
              width: "80%",
            }}
          >
            {product.order_list.map((item: productType, index) => (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                  }}
                >
                  <img
                    width={50}
                    src={`${process.env.NEXT_PUBLIC_BASE_API}/img/${item.imgURL}`}
                    alt=""
                  />
                  <Typography>{item.name}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    gap: 1,
                  }}
                >
                  <Rating
                    name="hover-feedback"
                    value={review.find((value) => value.id === item.id)?.review}
                    precision={1}
                    onChange={(event, newReview) => {
                      setReview([
                        ...review.filter((previous) => previous.id !== item.id),
                        { id: item.id, review: newReview as number },
                      ]);
                      {
                        event;
                      }
                    }}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  {review.find((h) => h.id === item.id) && (
                    <Box sx={{ ml: 2 }}>
                      {
                        labels[
                          review.find(
                            (hoverReview) => hoverReview.id === item.id
                          )?.review as number
                        ]
                      }
                    </Box>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            position: "",
            right: 8,
            bottom: 8,
            zIndex: 50,
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              setTimeout(() => setOpen(true), 100);
            }}
          >
            ตกลง
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
const Checkout_Bill: FunctionComponent = () => {
  // check status billing
  const [bill, setBill] = useState<boolean>(false);
  const [time_out, setTime_out] = useState<timeout_Type>({
    minutes: 0,
    second: 0,
  });
  const navigate = useNavigate();
  const state: state_Type = useLocation().state;
  const price = state.order_list.map((item) => item.price);
  const priceSum = price.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  useEffect(() => {
    if (state) {
      const time_current = new Date().getTime();
      if (time_out.minutes >= 0) {
        setTimeout(() => {
          const different_time = state.time_old.getTime() - time_current;
          const minutes = Math.floor(
            (different_time % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((different_time % (1000 * 60)) / 1000);
          setTime_out({ minutes: minutes, second: seconds });
        }, 1000);
        setBill(true);
      } else {
        navigate("/404");
      }
    } else {
      navigate("/404");
    }
  });

  return (
    <>
      <Header />
      <div className=" from-slate-600 p-4 box-border to-slate-100 text-left text-sm text-gray-scale-gray-900 font-body-xxl-body-xxl-500">
        {bill ? (
          <div className=" box-border grid grid-cols-1 md:grid-cols-2 justify-self-center w-fit gap-4 items-center">
            <div className=" flex flex-col items-start justify-start">
              <div>
                <div className=" text-lg  font-medium flex flex-row justify-center py-4">
                  สแกน QR Code เพื่อชำระเงิน
                </div>
                <div className="flex flex-col gap-5">
                  <div>
                    <div>
                      <strong>Shop name:&nbsp;&nbsp;</strong>{" "}
                      Shop-Organic-eCommerce
                    </div>
                    <div>
                      <strong>ชื่อบัญชี:&nbsp;&nbsp;</strong>นายณัฐวุฒิ จำปาแสง
                    </div>
                  </div>
                  {time_out.minutes >= 0 ? (
                    <img
                      src="/img/promptpay-QR.png"
                      alt=""
                      className="max-w-[400px] w-full object-cover "
                    />
                  ) : null}
                  <div className="flex flex-col gap-4 justify-center items-center">
                    <strong className="flex flex-row justify-center text-baes">
                      {time_out.minutes >= 0 ? (
                        <span>{`${time_out.minutes}:${time_out.second}`}</span>
                      ) : null}
                    </strong>
                    <a
                      href="/img/promptpay-QR.png"
                      className="no-underline px-4 py-1 bg-green-700 rounded-md text-white flex flex-row justify-self-center w-fit"
                      download={"promptpay-QR.png" }
                    >
                      บันทึก
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {time_out.minutes >= 0 ? (
              <div className="rounded-lg h-fit bg-gray-scale-white flex flex-col items-start justify-start p-6  border-[1px] border-solid border-gray-scale-gray-100">
                <div className="flex flex-col items-start justify-start gap-4">
                  <div className=" text-lg  font-medium">สรุปคำสั่งซื้อ</div>
                  <div className="scroll-checkBill overflow-auto space-y-2">
                    {state.order_list.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-start justify-start"
                      >
                        <div className=" flex flex-row items-center justify-between">
                          <div className="flex flex-row items-center justify-start gap-4 ">
                            <img
                              className=" max-w-[80px] w-full  object-cover"
                              alt=""
                              src={`${process.env.NEXT_PUBLIC_BASE_API}/img/${
                                item.imgURL
                              }`}
                            />
                            <div className="break-word">{item.name} </div>
                            <div className=" ">x{item.quantity}</div>
                            <div className="font-medium">
                              ฿{item.price.toFixed(2)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col items-start justify-start text-gray-scale-gray-700">
                    <div className="bg-gray-scale-white  flex flex-row gap-2 items-center justify-between box-border">
                      <div className=" ">รวม:</div>
                      <div className="  font-medium text-gray-scale-gray-900">
                        ฿{priceSum}
                      </div>
                    </div>
                    <div className=" box-border  h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
                    <div className="bg-gray-scale-white  flex flex-row gap-2 items-center justify-between box-border">
                      <div className=" ">ค่าจัดส่ง:</div>
                      <div className="  font-medium text-gray-scale-gray-900">
                        ฿50.00
                      </div>
                    </div>
                    <div className=" box-border  h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
                    <div className="bg-gray-scale-white  flex flex-row items-center justify-between gap-2 pb-0 box-border text-base">
                      <div className=" ">ทั้งหมด:</div>
                      <div className=" text-base leading-[120%] font-semibold text-gray-scale-gray-900">
                        ฿{(priceSum + 50).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-base pt-2">
                  <div className=" font-medium">ชำระเงิน</div>
                  <div className="  flex flex-col items-start justify-start  text-sm text-gray-scale-gray-700">
                    <div className="flex flex-row items-center justify-start ">
                      <div className=" ">Propmpay QR Code</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ) : (
          <Review />
        )}
      </div>
      <Foorter />
    </>
  );
};

export default Checkout_Bill;
