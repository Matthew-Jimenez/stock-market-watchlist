import { useEffect, useRef, useState } from "react";

interface Params {
  reloadDep?: string;
}

const useDimensions = ({ reloadDep }: Params) => {
  const ref = useRef<HTMLDivElement>(null);

  const [dimensions, setHeightAndWidth] = useState<
    | {
        height: number;
        width: number;
      }
    | undefined
  >(undefined);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries.length === 0) return;

      const entry = entries[0];

      setHeightAndWidth({
        height: entry.contentRect.height,
        width: entry.contentRect.width,
      });
    });

    const currentRef = ref.current;

    if (currentRef) {
      resizeObserver.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
    };
  }, [reloadDep]);

  return { targetRef: ref, dimensions };
};

export default useDimensions;
