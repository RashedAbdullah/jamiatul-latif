import Image from "next/image";
import Link from "next/link";

const TeacherAvatar = ({ lang = "bn", teacherId = "48y54" }) => {
  return (
    <div className="flex justify-center my-2">
      <Link href={`/${lang}/teachers/${teacherId}`}>
        <Image
          src={`https://scontent.fdac11-1.fna.fbcdn.net/v/t39.30808-6/433139882_2525540687655990_4919676745037325759_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFKeY0fR85QAVsbbGWVCh5oORlW4xM4TSg5GVbjEzhNKDXiQxkVwCh8RXYjkAU05jER-nCpu7es6YFXAUAecQW2&_nc_ohc=iIEmFshVdncQ7kNvgHjtCmL&_nc_ht=scontent.fdac11-1.fna&oh=00_AYCz1rdo-7s20OMwRSWcpwa7VHHhEQG5TGTMUPvl55i7kg&oe=666A7631`}
          alt="user avatar"
          height={400}
          width={400}
          className="rounded-full h-52 w-52"
        />
      </Link>
    </div>
  );
};

export default TeacherAvatar;
