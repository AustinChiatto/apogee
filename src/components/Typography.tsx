type TypographyProps = {
  children: string;
};

export const H1 = ({ children }: TypographyProps) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{children}</h1>
  );
};

export const H2 = ({ children }: TypographyProps) => {
  return (
    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
};

export const H3 = ({ children }: TypographyProps) => {
  return <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{children}</h3>;
};

export const H4 = ({ children }: TypographyProps) => {
  return <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{children}</h4>;
};

export const Text = ({ children }: TypographyProps) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
};

export const Quote = ({ children }: TypographyProps) => {
  return <blockquote className="mt-6 border-l-2 pl-6 italic">&quote;{children}&quote;</blockquote>;
};

export const InlineCode = ({ children }: TypographyProps) => {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
};

export const TextLarge = ({ children }: TypographyProps) => {
  return <span className="text-lg font-semibold">{children}</span>;
};

export const TextSmall = ({ children }: TypographyProps) => {
  return <small className="text-sm font-medium leading-none">{children}</small>;
};

export const TextMuted = ({ children }: TypographyProps) => {
  return <p className="text-sm text-muted-foreground">{children}</p>;
};

const Typography = [H1, H2, H3, H4, Text, Quote, InlineCode, TextLarge, TextSmall, TextMuted];

export default Typography;
