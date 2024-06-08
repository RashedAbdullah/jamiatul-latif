import thumbnail from "@/public/madrasha-thumbnail.png";
import Image from "next/image";
const MadrashaThumbnail = () => {
  return (
    <div className="shadow">
      <Image src={thumbnail} alt="" />
    </div>
  );
};

export default MadrashaThumbnail;
