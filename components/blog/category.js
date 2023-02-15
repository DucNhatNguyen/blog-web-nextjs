import Link from "next/link";
import Label from "../ui/label";

export default function CategoryLabel({ categories }) {
  return (
    <div className="flex gap-3">
      <Link href="#">
        <Label>{categories.title}</Label>
      </Link>
    </div>
  );
}
