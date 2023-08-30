import { FC } from "react";
import Image from "next/image";
import clsx from "clsx";

interface ILoadingProps {
  className?: string;
}

const Loading: FC<ILoadingProps> = ({ className }) => {
  return (
    <Image
      src={"/images/loading.svg"}
      width={0}
      height={0}
      alt={""}
      sizes={"100vw"}
      className={clsx(className)}
    />
  );
};

export { Loading };
