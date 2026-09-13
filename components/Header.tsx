import Image from "next/image";
import BookingButton from "./BookingButton";

export default function Header() {
  return (
    <header className="siteHeader">
      <a className="brand" href="#top" aria-label="Russell De Barber home">
        <Image src="/logo.svg" width={190} height={82} alt="Russell De Barber" priority />
      </a>
      <nav className="desktopNav" aria-label="Hoofdnavigatie">
        <a href="#ervaring">Ervaring</a>
        <a href="#diensten">Diensten</a>
        <a href="#contact">Contact</a>
      </nav>
      <BookingButton className="headerBook" label="Boeken" />
    </header>
  );
}
