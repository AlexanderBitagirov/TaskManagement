import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";
export interface TagProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement> {
    children: ReactNode;
    appearance: 'orange' | 'blue' | 'purple';
    size?: 'large' | 'low';
}
