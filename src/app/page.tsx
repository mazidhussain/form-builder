import { stackServerApp } from "@/stack";

export default async function Home() {
  const user = await stackServerApp.getUser({ or: 'redirect' });

  return (
    <>
      <div className="flex p-3 flex-col" >
        <div className="h-[220px]  bg-[#f1f3f4] w-full p-5 rounded-lg">
          <span>Start a new form</span>
          <div className="h-[123px] w-[164px] mt-2">
            <img className="cursor-pointer" src="https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png"></img>
            <p className="mt-2 text-sm mr-3">Blank Form</p>
          </div>
        </div>
        <p></p>
        <div className="p-5">
          <span>Recent forms</span>
        </div>
      </div>
    </>
  );
}
