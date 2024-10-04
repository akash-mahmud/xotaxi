import Booking from "@/components/booking/Booking";
import MapSection from "@/components/map/MapSection";


export default function Home() {
  return (
<div >
  <div className="grid grid-cols-1 md:grid-cols-3">
<div>
  <Booking/>
</div>
<div className=" col-span-2 md:order-last order-first">
  <MapSection/>
</div>
  </div>
</div>
  );
}
