type Props = {
  children?: string;
};

export default function Heading({ children }: Props) {
  return (
    <h1 className="text-3xl font-montserrat leading-snug mb-10">{children}</h1>
  );
}
