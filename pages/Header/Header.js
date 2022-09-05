import Link from "next/link";

const Header = () => {

    const titleHeader =[
        {lable: 'Home' ,path:'/'},
        {lable: 'Part2' ,path:'/Part/Parttwo'},
        {lable: 'Part3' ,path:'/Part/Partthree'},
        {lable: 'Part4' ,path:'/Part/Partfour'},
    ]
    return (
       <header className="h-10">
        <ul>
            {titleHeader.map(nav => (
                <Link href={nav.path}><a className="mx-4 font-bold">{nav.lable}</a></Link>
            ))}
        </ul>

       </header>
    );
}

export default Header;