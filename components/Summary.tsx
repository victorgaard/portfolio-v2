import { Typography } from "@components/Typography";

function Summary() {
  return (
    <div className="flex flex-col gap-1.5">
      <Typography.H2 className="font-semibold tracking-tight">
        Victor F. Santos
      </Typography.H2>
      <Typography.H5 className="font-medium tracking-tight">
        Product Engineer
      </Typography.H5>
      <Typography.Paragraph className="max-w-xs [text-wrap:balance]">
        Bridging the gap between Product, UX, and Frontend engineering.
      </Typography.Paragraph>
    </div>
  );
}

export default Summary;
