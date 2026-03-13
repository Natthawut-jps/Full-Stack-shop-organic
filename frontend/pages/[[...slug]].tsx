import dynamic from "next/dynamic";

const RootApp = dynamic(() => import("../src/RootApp"), { ssr: false });

export default function CatchAllPage() {
  return <RootApp />;
}
