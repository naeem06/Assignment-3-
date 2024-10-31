
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";


export default function Home() {
  return (
    <div className="w-screen h-svh">
     <Header/>
     <div className="w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 justify-center items-center p-[200px] pt-[150px] ">
      <div>
        <div className="id=name h-[200px] w-full items-center justify-center"><h1 className="text-white text-[30px]">Hi I'm <span className="text-red-700">Naeem</span><span className="text-black">Khan</span></h1><br /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minus quisquam velit quas labore nisi ut libero debitis at officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus exercitationem accusamus vero doloribus eaque. Officia asperiores obcaecati a! Distinctio voluptatum molestiae error repellat tempora culpa numquam doloribus non nostrum temporibus sint rerum autem odio perferendis, corporis, tempore ex, placeat natus recusandae esse. Cupiditate natus error nam deserunt! Delectus magni culpa at quia sit nulla esse inventore tempore soluta error odit harum cumque minima, omnis atque corrupti consequuntur? Non aut laborum sed distinctio magnam sunt voluptatem doloribus fugiat provident recusandae nam vero rerum commodi cum atque, et ipsa nobis velit enim itaque nihil nulla dolore veritatis esse? Animi quae odit labore doloremque earum, corporis omnis vero fugit illo dignissimos debitis eligendi.
        </p></div>
      </div>
     </div>

     <div className="w-full h-[600px] bg-gradient-to-r from-sky-500 to-indigo-500" id="about">
      <div className="w-full h-[20px] pl-[550px] pt-28 "><h1 className="text-[50px] ">About Us</h1></div>
      <div className="pt-28 p-28">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, optio! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut odio, ratione, officiis quibusdam eos quae amet nam mollitia commodi culpa exercitationem inventore modi, non consectetur distinctio? Tenetur corporis qui quas nam. Esse ab repellendus perferendis vel suscipit ea culpa reiciendis. Suscipit alias distinctio itaque fugiat sapiente soluta neque illo animi nesciunt rem autem iure quisquam deserunt pariatur voluptas dolore dolores accusamus, officia quo esse. Veritatis velit, distinctio quod nobis fugiat, est non molestiae delectus magnam soluta laboriosam atque deserunt blanditiis cum maxime. Tempora quidem ullam amet pariatur sunt accusantium in voluptates sit optio cupiditate nisi voluptatem eligendi similique, dolore tempore quaerat repudiandae necessitatibus est voluptatibus dolores cum dolor? Similique quasi excepturi assumenda dignissimos soluta placeat aut ipsa minus asperiores, dolor, ducimus, ex fuga harum ab molestiae suscipit quas! Culpa laboriosam tenetur cumque amet, harum consectetur, accusantium esse dolore quo cupiditate laborum tempore, vitae aliquam sequi veritatis autem ducimus repudiandae provident hic repellendus ad magnam illum eaque? Quae voluptates nobis neque culpa vel maiores quisquam eos quod possimus fugit? Quibusdam eligendi hic, neque ea quos omnis a architecto repellendus pariatur animi libero! Quia quos eaque velit quidem repellat. Vitae, quam est. Temporibus enim fuga autem architecto quos? Beatae molestias ipsam id?</div>
     </div>
     <div className="h-[500px] w-full bg-gradient-to-r from-yellow-400 to-pink-500"id="portfolio">
      <div className="w-full h-[50px] p-10 text-black text-[50px]"><h1 className="pl-[520px] pt-8">Portfolio</h1></div>
      <div className="id=portfolio box h-[300px] w-full flex pt-[100px] ">
      <div className="id=box1 w-[600px] h-full p-[50px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, fuga?</div>
      <div className="id=box2 w-[600px] h-full p-[50px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, qui? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, maxime? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, optio.</div>
      <div className="id=box3 w-[600px] h-full p-[50px] ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsam? lorem10</div>
      </div>
     </div>
     <Footer/>
    </div>
  );
}
