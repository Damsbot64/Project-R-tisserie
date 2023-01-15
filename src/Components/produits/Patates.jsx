import React from "react";
import Image from "next/image";

function Patates() {
  return (
    <div>
      <div className="flex flex-col  items-center w-full  mt-2 md:flex-row-reverse   ">
        <div className="w-48 h-28 relative overflow-hidden rounded-md mb-2 md:min-w-[288px] md:min-h-[176px]">
          <Image
            fill
            alt="pommes de terre du pays basque rissolées jusqu'a qu'elles deviennent fondantes "
            src="/Images/Logo3.JPG"
          />
        </div>
        <p className="text-base text-white md:text-lg text-center">
          Les viandes sont accompagnées de pommes de terre cuite vapeur puis
          sautées a la poêle avec des oignons caramelisés.
        </p>
      </div>
    </div>
  );
}

export default Patates;