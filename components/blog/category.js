import Link from "next/link";
import Label from "../ui/label";

export default function CategoryLabel({ category }) {
  return (
    <div className="flex gap-3">
      <Link href="#">
        <Label>{category.title}</Label>
      </Link>
    </div>
  );
}
