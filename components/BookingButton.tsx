const BOOKING_URL = "https://res.afspraakmaken.online/?p=appointment&compid=19835657";

type Props = {
  className?: string;
  label?: string;
};

export default function BookingButton({ className = "", label = "Plan afspraak" }: Props) {
  return (
    <a
      className={`bookingButton ${className}`.trim()}
      href={BOOKING_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Plan een afspraak bij Russell De Barber"
    >
      <span>{label}</span>
      <span className="buttonArrow" aria-hidden="true">↗</span>
    </a>
  );
}
