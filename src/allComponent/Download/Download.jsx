import Chart from "@/reuseable/Chart";
import DownloadingProcess from "./DownloadingProcess";

const Download = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#161A19] to-[#282A37] p-6 rounded-2xl my-6">
      <div className="flex items-center border-b border-[#FFFFFF99] pb-3">
        <div className="w-1/2">
          <Chart />
        </div>
        <div className="w-1/2 flex justify-between">
          <div>
            <h1 className="text-white font-semibold leading-4">2.2 Mb/S</h1>
            <p className="text-[#FFFFFF99] text-[14px]">Current</p>
          </div>
          <div>
            <h1 className="text-white font-semibold leading-4">3.2 Mb/S</h1>
            <p className="text-[#FFFFFF99] text-[14px]">Peak</p>
          </div>
          <div>
            <h1 className="text-white font-semibold leading-4">2 Mb</h1>
            <p className="text-[#FFFFFF99] text-[14px]">Total</p>
          </div>
          <div>
            <h1 className="text-white font-semibold leading-4">4.5 Mb/S</h1>
            <p className="text-[#FFFFFF99] text-[14px]">Disk Usage</p>
          </div>
        </div>
      </div>

      <div className="w-full my-6">
        <DownloadingProcess/>
      </div>

    </div>
  );
};

export default Download;
