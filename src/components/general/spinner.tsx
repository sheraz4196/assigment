export default function Spinner() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div>
        <div
          role="loading-spinner"
          aria-live="polite"
          className="border-8 border-[#DDF3FF] border-t-[#6d31ed]  rounded-full animate-spin w-24 h-24 "
        ></div>
      </div>
    </div>
  );
}
