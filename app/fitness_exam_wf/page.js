import Link from "next/link";

const FitnessPage = () => {
  return (
    <div className="container mx-auto">
      <div className="min-h-screen bg-white text-black flex flex-col">
        {/* Top Navigation */}
        <div className="flex justify-between items-center p-6 text-sm font-medium">
          <div className="ml-4">My Blog</div>
          <div className="flex gap-6 mr-4">
            <Link href="#">Fitness_Exam_WF</Link>
            <Link href="#">Sample Page</Link>
          </div>
        </div>

        {/* Center Title */}
        <div className="flex-grow flex justify-center items-center text-5xl font-light">
          Fitness_Exam_WF
        </div>

        {/* Footer Section */}
        <div className="flex justify-between p-8 border-t">
          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold">My Blog</h2>
            <p className="text-base mt-1">My WordPress Blog</p>
          </div>

          {/* Right - Grid of links */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-base">
            <Link href="#">Blog</Link>
            <Link href="#">Events</Link>
            <Link href="#">About</Link>
            <Link href="#">Shop</Link>
            <Link href="#">FAQs</Link>
            <Link href="#">Patterns</Link>
            <Link href="#">Authors</Link>
            <Link href="#">Themes</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessPage;
