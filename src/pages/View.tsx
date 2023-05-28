
import Hero from '../components/block/Hero'
import VideoPart from '../components/block/VideoPart'

/* <div>This is the Landing Page!</div>
<Link to="/sign-up" >Register</Link>
</div> */

const View = () => {
    // const {
    //     userState,
    // }: any = useContext(GlobalContext)

    // console.log("userState: ", userState)
    return (
     <div>
        <Hero/>
        <VideoPart/>
     </div>   
    )
}

export default View