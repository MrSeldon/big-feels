interface SectionLabelProps {
  text: string;
  color?: string;
}

export default function SectionLabel({
  text,
  color = "text-white/40",
}: SectionLabelProps) {
  return (
    <p
      className={`font-sans text-xs uppercase tracking-widest ${color} mb-6`}
    >
      {text}
    </p>
  );
}
