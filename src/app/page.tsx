import AddForm from "@/components/AddForm";
import { stackServerApp } from "@/stack";

export default async function Home() {
  const user = await stackServerApp.getUser({ or: 'redirect' });

  return (
    <>
      <div className="flex p-3 flex-col" >
        <AddForm />
        <div className="p-5">
          <span>Recent forms</span>
        </div>
      </div>
    </>
  );
}
