"use client";

import { HtmlHTMLAttributes, ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const IOS_LINK = "https://apps.apple.com/ph/app/appleteapp/id6648766155";
const ANDROID_LINK = "https://play.google.com/store/apps/details?id=com.applete.app"

interface IDownloadAppButton extends HtmlHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function DownloadAppButton({children, className, ...rest}:IDownloadAppButton) {
  const [storeUrl, setStoreUrl] = useState(ANDROID_LINK);

  useEffect(() => {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      setStoreUrl(IOS_LINK)
  }
  }, []);

  return (
    <Link href={storeUrl} passHref target="_blank">
      <Button className={cn("rounded-full", className)} {...rest}>
        {children}
      </Button>
    </Link>
  );
}
