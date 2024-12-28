import { Img } from 'react-image';

export function MainImage() {
  return (
    <div className="mb-14 mt-10 flex flex-col items-center justify-center md:flex-row">
      <Img
        className="relative w-full rounded-3xl bg-white"
        src="/main-image.jpg"
        alt="Logo"
        width={300} // This will be the maximum width
        height={100} // This will be the maximum height
      />
    </div>
  );
}



export function SponsorImage() {
  return (
    <div className="mb-8 flex flex-col items-center justify-center md:flex-row">
      <Img
        className="relative w-full rounded-3xl bg-white"
        src="/sponsor-image.png"
        alt="Book"
        width={300} // This will be the maximum width
        height={100} // This will be the maximum height
      />
    </div>
  );
}
