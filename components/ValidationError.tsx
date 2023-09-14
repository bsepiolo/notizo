type Props = {
  children?: string;
};

export default function ValidationError({ children }: Props) {
  return (
    <div className="text-red text-sm px-4 absolute bottom-0 leading-tight">
      {children}
    </div>
  );
}
