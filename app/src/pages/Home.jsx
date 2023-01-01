import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useHeaderCb, usedivCb, useDiv1Cb, useFlex5Cb, useFlex301Cb, useHome_HeroCb, useFlex13Cb, useDiv5Cb, useDiv6Cb, useFlex354Cb, useCall_&_CvCb, useFlex340Cb, useFlex339Cb, useServices__wrapperCb, useServicesCb, useFlex20Cb, useFlex66Cb, useDiv13Cb, useFlex89Cb, useFlex87Cb, useDiv127Cb, useFlex303Cb, useFlex88Cb, useDiv47Cb, useFlex91Cb, useProjectsCb, useFlex25Cb, useDiv16Cb, useFlex92Cb, useFlex27Cb, useFlex93Cb, useFlex96Cb, useFlex97Cb, useFlex118Cb, useFlex117Cb, useFlex116Cb, useFlex121Cb, useFlex120Cb, useFlex119Cb, useBlogs_WrapperCb, useBlogsCb, useBlogs_LeftCb, useFlex304Cb, useBlogs_RightCb, useDiv18Cb, useFlex335Cb, useDiv50Cb, useFlex336Cb, useDiv51Cb, useFlex337Cb, useFlex32Cb, useFlex33Cb, useProduct_DesignerCb, useProducts_designer_TopCb, useProduc_Designer_TitleCb, useProduct_Designer_BottomCb, useFlex39Cb, useEduction_&_WE_&WrapperCb, useEduction_&_WECb, useEducationCb, useFlex45Cb, useDiv24Cb, useFlex129Cb, useDiv54Cb, useFlex134Cb, useFlex131Cb, useDiv87Cb, useFlex188Cb, useFlex187Cb, useDiv86Cb, useFlex186Cb, useDiv89Cb, useFlex191Cb, useFlex190Cb, useDiv88Cb, useFlex189Cb, useWork_ExpCb, useFlex201Cb, useDiv95Cb, useFlex200Cb, useFlex197Cb, useDiv92Cb, useFlex194Cb, useFlex202Cb, useFlex244Cb, useDiv111Cb, useFlex243Cb, useDiv110Cb, useFlex241Cb, useFlex240Cb, useFlex242Cb, useFlex318Cb, useDiv132Cb, useFlex317Cb, useFlex316Cb, useDiv131Cb, useFlex315Cb, useFlex314Cb, useTestimonials_WrapperCb, useTestimonialCb, useFlex48Cb, useFlex49Cb, useFlex53Cb, useDiv34Cb, useFlex258Cb, useDiv116Cb, useFlex260Cb, useFAQCb, useFAQ_bottomCb, useFlex60Cb, useFlex266Cb, useFlex267Cb, useFlex278Cb, useFlex276Cb, useFlex277Cb, useFQ_TopCb, useContact_WrapperCb, useContactCb, useContact_bottomCb, useContact_bottom_leftCb, useContact_bottom_rightCb, useFlex74Cb, useFlex285Cb, useFlex286Cb, useContac_topCb, useAll_right_wrapperCb, useAll_rightCb, useFlex293Cb, useTrusted_by_wrapperCb, useTrusted_byCb, useDiv9Cb, useFlex16Cb, useImage1Cb, useTextBox13Cb, useTextBox14Cb, useTextBox16Cb, useTextBox17Cb, useImage59Cb, useTextBox386Cb, useTextBox21Cb, usetitleCb, useTextBox87Cb, useTextBox89Cb, usetitle2Cb, useTextBox91Cb, useImage2Cb, useButton18Cb, useImage71Cb, useTextBox416Cb, useservices_textCb, useTextBox97Cb, useImage10Cb, useTextBox26Cb, useTextBox27Cb, useTextBox105Cb, useTextBox107Cb, useTextBox108Cb, useTextBox98Cb, useTextBox99Cb, useImage29Cb, useTextBox387Cb, useTextBox388Cb, useTextBox389Cb, useTextBox100Cb, useTextBox101Cb, useImage30Cb, useTextBox112Cb, useTextBox113Cb, useTextBox114Cb, useTextBox34Cb, useproject_textCb, useTextBox36Cb, useButton11Cb, useImage31Cb, useTextBox115Cb, useTextBox116Cb, useTextBox117Cb, useImage38Cb, useTextBox136Cb, useTextBox137Cb, useTextBox138Cb, useImage39Cb, useTextBox139Cb, useTextBox140Cb, useTextBox141Cb, useblogs_textCb, useTextBox143Cb, useImage60Cb, useTextBox390Cb, useTextBox146Cb, useTextBox147Cb, useTextBox412Cb, useImage68Cb, useTextBox154Cb, useTextBox155Cb, useImage69Cb, useTextBox413Cb, useTextBox157Cb, useTextBox158Cb, useImage70Cb, useTextBox414Cb, useProduct_Designer_TextCb, useproduct_design_textCb, useTextBox161Cb, useImage17Cb, useImage19Cb, useImage20Cb, useImage21Cb, useTextBox58Cb, useTextBox166Cb, useTextBox167Cb, useTextBox169Cb, useTextBox223Cb, useTextBox221Cb, useTextBox222Cb, useTextBox226Cb, useTextBox224Cb, useTextBox225Cb, useTextBox59Cb, useTextBox235Cb, useTextBox231Cb, useTextBox232Cb, useImage42Cb, useTextBox264Cb, useImage52Cb, useTextBox263Cb, useTextBox265Cb, useTextBox399Cb, useTextBox398Cb, useTextBox397Cb, useImage63Cb, usetestimonial_textCb, useTextBox274Cb, useImage24Cb, useImage25Cb, useTextBox275Cb, useTextBox276Cb, useTextBox277Cb, useButton12Cb, useButton16Cb, useTextBox294Cb, useTextBox295Cb, useTextBox293Cb, useTextBox296Cb, useTextBox297Cb, useTextBox298Cb, useTextBox317Cb, useTextBox318Cb, useTextBox319Cb, useTextBox320Cb, useTextBox321Cb, useTextBox322Cb, usefaq_textCb, useTextBox280Cb, useTextBox330Cb, useTextBox331Cb, useTextBox359Cb, useTextBox78Cb, useTextBox342Cb, useTextBox343Cb, useTextBox360Cb, useTextBox361Cb, useTextBox362Cb, useTextBox363Cb, useTextBox364Cb, useTextBox365Cb, usecontact_textCb, useTextBox327Cb, useTextBox375Cb, useTextBox376Cb, useTextBox377Cb, useTextBox378Cb, useTextBox379Cb, useTextBox380Cb, useTextBox381Cb, useTextBox383Cb, useTextBox22Cb, useImage3Cb, useImage26Cb, useImage27Cb, useImage28Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const HeaderProps = useStore((state)=>state["Home"]["Header"]);
const HeaderIoProps = useIoStore((state)=>state["Home"]["Header"]);
const HeaderCb = useHeaderCb()
const divProps = useStore((state)=>state["Home"]["div"]);
const divIoProps = useIoStore((state)=>state["Home"]["div"]);
const divCb = usedivCb()
const Div1Props = useStore((state)=>state["Home"]["Div1"]);
const Div1IoProps = useIoStore((state)=>state["Home"]["Div1"]);
const Div1Cb = useDiv1Cb()
const Flex5Props = useStore((state)=>state["Home"]["Flex5"]);
const Flex5IoProps = useIoStore((state)=>state["Home"]["Flex5"]);
const Flex5Cb = useFlex5Cb()
const Flex301Props = useStore((state)=>state["Home"]["Flex301"]);
const Flex301IoProps = useIoStore((state)=>state["Home"]["Flex301"]);
const Flex301Cb = useFlex301Cb()
const Home_HeroProps = useStore((state)=>state["Home"]["Home_Hero"]);
const Home_HeroIoProps = useIoStore((state)=>state["Home"]["Home_Hero"]);
const Home_HeroCb = useHome_HeroCb()
const Flex13Props = useStore((state)=>state["Home"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["Home"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Div5Props = useStore((state)=>state["Home"]["Div5"]);
const Div5IoProps = useIoStore((state)=>state["Home"]["Div5"]);
const Div5Cb = useDiv5Cb()
const Div6Props = useStore((state)=>state["Home"]["Div6"]);
const Div6IoProps = useIoStore((state)=>state["Home"]["Div6"]);
const Div6Cb = useDiv6Cb()
const Flex354Props = useStore((state)=>state["Home"]["Flex354"]);
const Flex354IoProps = useIoStore((state)=>state["Home"]["Flex354"]);
const Flex354Cb = useFlex354Cb()
const Call_&_CvProps = useStore((state)=>state["Home"]["Call_&_Cv"]);
const Call_&_CvIoProps = useIoStore((state)=>state["Home"]["Call_&_Cv"]);
const Call_&_CvCb = useCall_&_CvCb()
const Flex340Props = useStore((state)=>state["Home"]["Flex340"]);
const Flex340IoProps = useIoStore((state)=>state["Home"]["Flex340"]);
const Flex340Cb = useFlex340Cb()
const Flex339Props = useStore((state)=>state["Home"]["Flex339"]);
const Flex339IoProps = useIoStore((state)=>state["Home"]["Flex339"]);
const Flex339Cb = useFlex339Cb()
const Services__wrapperProps = useStore((state)=>state["Home"]["Services__wrapper"]);
const Services__wrapperIoProps = useIoStore((state)=>state["Home"]["Services__wrapper"]);
const Services__wrapperCb = useServices__wrapperCb()
const ServicesProps = useStore((state)=>state["Home"]["Services"]);
const ServicesIoProps = useIoStore((state)=>state["Home"]["Services"]);
const ServicesCb = useServicesCb()
const Flex20Props = useStore((state)=>state["Home"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["Home"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const Flex66Props = useStore((state)=>state["Home"]["Flex66"]);
const Flex66IoProps = useIoStore((state)=>state["Home"]["Flex66"]);
const Flex66Cb = useFlex66Cb()
const Div13Props = useStore((state)=>state["Home"]["Div13"]);
const Div13IoProps = useIoStore((state)=>state["Home"]["Div13"]);
const Div13Cb = useDiv13Cb()
const Flex89Props = useStore((state)=>state["Home"]["Flex89"]);
const Flex89IoProps = useIoStore((state)=>state["Home"]["Flex89"]);
const Flex89Cb = useFlex89Cb()
const Flex87Props = useStore((state)=>state["Home"]["Flex87"]);
const Flex87IoProps = useIoStore((state)=>state["Home"]["Flex87"]);
const Flex87Cb = useFlex87Cb()
const Div127Props = useStore((state)=>state["Home"]["Div127"]);
const Div127IoProps = useIoStore((state)=>state["Home"]["Div127"]);
const Div127Cb = useDiv127Cb()
const Flex303Props = useStore((state)=>state["Home"]["Flex303"]);
const Flex303IoProps = useIoStore((state)=>state["Home"]["Flex303"]);
const Flex303Cb = useFlex303Cb()
const Flex88Props = useStore((state)=>state["Home"]["Flex88"]);
const Flex88IoProps = useIoStore((state)=>state["Home"]["Flex88"]);
const Flex88Cb = useFlex88Cb()
const Div47Props = useStore((state)=>state["Home"]["Div47"]);
const Div47IoProps = useIoStore((state)=>state["Home"]["Div47"]);
const Div47Cb = useDiv47Cb()
const Flex91Props = useStore((state)=>state["Home"]["Flex91"]);
const Flex91IoProps = useIoStore((state)=>state["Home"]["Flex91"]);
const Flex91Cb = useFlex91Cb()
const ProjectsProps = useStore((state)=>state["Home"]["Projects"]);
const ProjectsIoProps = useIoStore((state)=>state["Home"]["Projects"]);
const ProjectsCb = useProjectsCb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Div16Props = useStore((state)=>state["Home"]["Div16"]);
const Div16IoProps = useIoStore((state)=>state["Home"]["Div16"]);
const Div16Cb = useDiv16Cb()
const Flex92Props = useStore((state)=>state["Home"]["Flex92"]);
const Flex92IoProps = useIoStore((state)=>state["Home"]["Flex92"]);
const Flex92Cb = useFlex92Cb()
const Flex27Props = useStore((state)=>state["Home"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["Home"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const Flex93Props = useStore((state)=>state["Home"]["Flex93"]);
const Flex93IoProps = useIoStore((state)=>state["Home"]["Flex93"]);
const Flex93Cb = useFlex93Cb()
const Flex96Props = useStore((state)=>state["Home"]["Flex96"]);
const Flex96IoProps = useIoStore((state)=>state["Home"]["Flex96"]);
const Flex96Cb = useFlex96Cb()
const Flex97Props = useStore((state)=>state["Home"]["Flex97"]);
const Flex97IoProps = useIoStore((state)=>state["Home"]["Flex97"]);
const Flex97Cb = useFlex97Cb()
const Flex118Props = useStore((state)=>state["Home"]["Flex118"]);
const Flex118IoProps = useIoStore((state)=>state["Home"]["Flex118"]);
const Flex118Cb = useFlex118Cb()
const Flex117Props = useStore((state)=>state["Home"]["Flex117"]);
const Flex117IoProps = useIoStore((state)=>state["Home"]["Flex117"]);
const Flex117Cb = useFlex117Cb()
const Flex116Props = useStore((state)=>state["Home"]["Flex116"]);
const Flex116IoProps = useIoStore((state)=>state["Home"]["Flex116"]);
const Flex116Cb = useFlex116Cb()
const Flex121Props = useStore((state)=>state["Home"]["Flex121"]);
const Flex121IoProps = useIoStore((state)=>state["Home"]["Flex121"]);
const Flex121Cb = useFlex121Cb()
const Flex120Props = useStore((state)=>state["Home"]["Flex120"]);
const Flex120IoProps = useIoStore((state)=>state["Home"]["Flex120"]);
const Flex120Cb = useFlex120Cb()
const Flex119Props = useStore((state)=>state["Home"]["Flex119"]);
const Flex119IoProps = useIoStore((state)=>state["Home"]["Flex119"]);
const Flex119Cb = useFlex119Cb()
const Blogs_WrapperProps = useStore((state)=>state["Home"]["Blogs_Wrapper"]);
const Blogs_WrapperIoProps = useIoStore((state)=>state["Home"]["Blogs_Wrapper"]);
const Blogs_WrapperCb = useBlogs_WrapperCb()
const BlogsProps = useStore((state)=>state["Home"]["Blogs"]);
const BlogsIoProps = useIoStore((state)=>state["Home"]["Blogs"]);
const BlogsCb = useBlogsCb()
const Blogs_LeftProps = useStore((state)=>state["Home"]["Blogs_Left"]);
const Blogs_LeftIoProps = useIoStore((state)=>state["Home"]["Blogs_Left"]);
const Blogs_LeftCb = useBlogs_LeftCb()
const Flex304Props = useStore((state)=>state["Home"]["Flex304"]);
const Flex304IoProps = useIoStore((state)=>state["Home"]["Flex304"]);
const Flex304Cb = useFlex304Cb()
const Blogs_RightProps = useStore((state)=>state["Home"]["Blogs_Right"]);
const Blogs_RightIoProps = useIoStore((state)=>state["Home"]["Blogs_Right"]);
const Blogs_RightCb = useBlogs_RightCb()
const Div18Props = useStore((state)=>state["Home"]["Div18"]);
const Div18IoProps = useIoStore((state)=>state["Home"]["Div18"]);
const Div18Cb = useDiv18Cb()
const Flex335Props = useStore((state)=>state["Home"]["Flex335"]);
const Flex335IoProps = useIoStore((state)=>state["Home"]["Flex335"]);
const Flex335Cb = useFlex335Cb()
const Div50Props = useStore((state)=>state["Home"]["Div50"]);
const Div50IoProps = useIoStore((state)=>state["Home"]["Div50"]);
const Div50Cb = useDiv50Cb()
const Flex336Props = useStore((state)=>state["Home"]["Flex336"]);
const Flex336IoProps = useIoStore((state)=>state["Home"]["Flex336"]);
const Flex336Cb = useFlex336Cb()
const Div51Props = useStore((state)=>state["Home"]["Div51"]);
const Div51IoProps = useIoStore((state)=>state["Home"]["Div51"]);
const Div51Cb = useDiv51Cb()
const Flex337Props = useStore((state)=>state["Home"]["Flex337"]);
const Flex337IoProps = useIoStore((state)=>state["Home"]["Flex337"]);
const Flex337Cb = useFlex337Cb()
const Flex32Props = useStore((state)=>state["Home"]["Flex32"]);
const Flex32IoProps = useIoStore((state)=>state["Home"]["Flex32"]);
const Flex32Cb = useFlex32Cb()
const Flex33Props = useStore((state)=>state["Home"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["Home"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const Product_DesignerProps = useStore((state)=>state["Home"]["Product_Designer"]);
const Product_DesignerIoProps = useIoStore((state)=>state["Home"]["Product_Designer"]);
const Product_DesignerCb = useProduct_DesignerCb()
const Products_designer_TopProps = useStore((state)=>state["Home"]["Products_designer_Top"]);
const Products_designer_TopIoProps = useIoStore((state)=>state["Home"]["Products_designer_Top"]);
const Products_designer_TopCb = useProducts_designer_TopCb()
const Produc_Designer_TitleProps = useStore((state)=>state["Home"]["Produc_Designer_Title"]);
const Produc_Designer_TitleIoProps = useIoStore((state)=>state["Home"]["Produc_Designer_Title"]);
const Produc_Designer_TitleCb = useProduc_Designer_TitleCb()
const Product_Designer_BottomProps = useStore((state)=>state["Home"]["Product_Designer_Bottom"]);
const Product_Designer_BottomIoProps = useIoStore((state)=>state["Home"]["Product_Designer_Bottom"]);
const Product_Designer_BottomCb = useProduct_Designer_BottomCb()
const Flex39Props = useStore((state)=>state["Home"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["Home"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const Eduction_&_WE_&WrapperProps = useStore((state)=>state["Home"]["Eduction_&_WE_&Wrapper"]);
const Eduction_&_WE_&WrapperIoProps = useIoStore((state)=>state["Home"]["Eduction_&_WE_&Wrapper"]);
const Eduction_&_WE_&WrapperCb = useEduction_&_WE_&WrapperCb()
const Eduction_&_WEProps = useStore((state)=>state["Home"]["Eduction_&_WE"]);
const Eduction_&_WEIoProps = useIoStore((state)=>state["Home"]["Eduction_&_WE"]);
const Eduction_&_WECb = useEduction_&_WECb()
const EducationProps = useStore((state)=>state["Home"]["Education"]);
const EducationIoProps = useIoStore((state)=>state["Home"]["Education"]);
const EducationCb = useEducationCb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Div24Props = useStore((state)=>state["Home"]["Div24"]);
const Div24IoProps = useIoStore((state)=>state["Home"]["Div24"]);
const Div24Cb = useDiv24Cb()
const Flex129Props = useStore((state)=>state["Home"]["Flex129"]);
const Flex129IoProps = useIoStore((state)=>state["Home"]["Flex129"]);
const Flex129Cb = useFlex129Cb()
const Div54Props = useStore((state)=>state["Home"]["Div54"]);
const Div54IoProps = useIoStore((state)=>state["Home"]["Div54"]);
const Div54Cb = useDiv54Cb()
const Flex134Props = useStore((state)=>state["Home"]["Flex134"]);
const Flex134IoProps = useIoStore((state)=>state["Home"]["Flex134"]);
const Flex134Cb = useFlex134Cb()
const Flex131Props = useStore((state)=>state["Home"]["Flex131"]);
const Flex131IoProps = useIoStore((state)=>state["Home"]["Flex131"]);
const Flex131Cb = useFlex131Cb()
const Div87Props = useStore((state)=>state["Home"]["Div87"]);
const Div87IoProps = useIoStore((state)=>state["Home"]["Div87"]);
const Div87Cb = useDiv87Cb()
const Flex188Props = useStore((state)=>state["Home"]["Flex188"]);
const Flex188IoProps = useIoStore((state)=>state["Home"]["Flex188"]);
const Flex188Cb = useFlex188Cb()
const Flex187Props = useStore((state)=>state["Home"]["Flex187"]);
const Flex187IoProps = useIoStore((state)=>state["Home"]["Flex187"]);
const Flex187Cb = useFlex187Cb()
const Div86Props = useStore((state)=>state["Home"]["Div86"]);
const Div86IoProps = useIoStore((state)=>state["Home"]["Div86"]);
const Div86Cb = useDiv86Cb()
const Flex186Props = useStore((state)=>state["Home"]["Flex186"]);
const Flex186IoProps = useIoStore((state)=>state["Home"]["Flex186"]);
const Flex186Cb = useFlex186Cb()
const Div89Props = useStore((state)=>state["Home"]["Div89"]);
const Div89IoProps = useIoStore((state)=>state["Home"]["Div89"]);
const Div89Cb = useDiv89Cb()
const Flex191Props = useStore((state)=>state["Home"]["Flex191"]);
const Flex191IoProps = useIoStore((state)=>state["Home"]["Flex191"]);
const Flex191Cb = useFlex191Cb()
const Flex190Props = useStore((state)=>state["Home"]["Flex190"]);
const Flex190IoProps = useIoStore((state)=>state["Home"]["Flex190"]);
const Flex190Cb = useFlex190Cb()
const Div88Props = useStore((state)=>state["Home"]["Div88"]);
const Div88IoProps = useIoStore((state)=>state["Home"]["Div88"]);
const Div88Cb = useDiv88Cb()
const Flex189Props = useStore((state)=>state["Home"]["Flex189"]);
const Flex189IoProps = useIoStore((state)=>state["Home"]["Flex189"]);
const Flex189Cb = useFlex189Cb()
const Work_ExpProps = useStore((state)=>state["Home"]["Work_Exp"]);
const Work_ExpIoProps = useIoStore((state)=>state["Home"]["Work_Exp"]);
const Work_ExpCb = useWork_ExpCb()
const Flex201Props = useStore((state)=>state["Home"]["Flex201"]);
const Flex201IoProps = useIoStore((state)=>state["Home"]["Flex201"]);
const Flex201Cb = useFlex201Cb()
const Div95Props = useStore((state)=>state["Home"]["Div95"]);
const Div95IoProps = useIoStore((state)=>state["Home"]["Div95"]);
const Div95Cb = useDiv95Cb()
const Flex200Props = useStore((state)=>state["Home"]["Flex200"]);
const Flex200IoProps = useIoStore((state)=>state["Home"]["Flex200"]);
const Flex200Cb = useFlex200Cb()
const Flex197Props = useStore((state)=>state["Home"]["Flex197"]);
const Flex197IoProps = useIoStore((state)=>state["Home"]["Flex197"]);
const Flex197Cb = useFlex197Cb()
const Div92Props = useStore((state)=>state["Home"]["Div92"]);
const Div92IoProps = useIoStore((state)=>state["Home"]["Div92"]);
const Div92Cb = useDiv92Cb()
const Flex194Props = useStore((state)=>state["Home"]["Flex194"]);
const Flex194IoProps = useIoStore((state)=>state["Home"]["Flex194"]);
const Flex194Cb = useFlex194Cb()
const Flex202Props = useStore((state)=>state["Home"]["Flex202"]);
const Flex202IoProps = useIoStore((state)=>state["Home"]["Flex202"]);
const Flex202Cb = useFlex202Cb()
const Flex244Props = useStore((state)=>state["Home"]["Flex244"]);
const Flex244IoProps = useIoStore((state)=>state["Home"]["Flex244"]);
const Flex244Cb = useFlex244Cb()
const Div111Props = useStore((state)=>state["Home"]["Div111"]);
const Div111IoProps = useIoStore((state)=>state["Home"]["Div111"]);
const Div111Cb = useDiv111Cb()
const Flex243Props = useStore((state)=>state["Home"]["Flex243"]);
const Flex243IoProps = useIoStore((state)=>state["Home"]["Flex243"]);
const Flex243Cb = useFlex243Cb()
const Div110Props = useStore((state)=>state["Home"]["Div110"]);
const Div110IoProps = useIoStore((state)=>state["Home"]["Div110"]);
const Div110Cb = useDiv110Cb()
const Flex241Props = useStore((state)=>state["Home"]["Flex241"]);
const Flex241IoProps = useIoStore((state)=>state["Home"]["Flex241"]);
const Flex241Cb = useFlex241Cb()
const Flex240Props = useStore((state)=>state["Home"]["Flex240"]);
const Flex240IoProps = useIoStore((state)=>state["Home"]["Flex240"]);
const Flex240Cb = useFlex240Cb()
const Flex242Props = useStore((state)=>state["Home"]["Flex242"]);
const Flex242IoProps = useIoStore((state)=>state["Home"]["Flex242"]);
const Flex242Cb = useFlex242Cb()
const Flex318Props = useStore((state)=>state["Home"]["Flex318"]);
const Flex318IoProps = useIoStore((state)=>state["Home"]["Flex318"]);
const Flex318Cb = useFlex318Cb()
const Div132Props = useStore((state)=>state["Home"]["Div132"]);
const Div132IoProps = useIoStore((state)=>state["Home"]["Div132"]);
const Div132Cb = useDiv132Cb()
const Flex317Props = useStore((state)=>state["Home"]["Flex317"]);
const Flex317IoProps = useIoStore((state)=>state["Home"]["Flex317"]);
const Flex317Cb = useFlex317Cb()
const Flex316Props = useStore((state)=>state["Home"]["Flex316"]);
const Flex316IoProps = useIoStore((state)=>state["Home"]["Flex316"]);
const Flex316Cb = useFlex316Cb()
const Div131Props = useStore((state)=>state["Home"]["Div131"]);
const Div131IoProps = useIoStore((state)=>state["Home"]["Div131"]);
const Div131Cb = useDiv131Cb()
const Flex315Props = useStore((state)=>state["Home"]["Flex315"]);
const Flex315IoProps = useIoStore((state)=>state["Home"]["Flex315"]);
const Flex315Cb = useFlex315Cb()
const Flex314Props = useStore((state)=>state["Home"]["Flex314"]);
const Flex314IoProps = useIoStore((state)=>state["Home"]["Flex314"]);
const Flex314Cb = useFlex314Cb()
const Testimonials_WrapperProps = useStore((state)=>state["Home"]["Testimonials_Wrapper"]);
const Testimonials_WrapperIoProps = useIoStore((state)=>state["Home"]["Testimonials_Wrapper"]);
const Testimonials_WrapperCb = useTestimonials_WrapperCb()
const TestimonialProps = useStore((state)=>state["Home"]["Testimonial"]);
const TestimonialIoProps = useIoStore((state)=>state["Home"]["Testimonial"]);
const TestimonialCb = useTestimonialCb()
const Flex48Props = useStore((state)=>state["Home"]["Flex48"]);
const Flex48IoProps = useIoStore((state)=>state["Home"]["Flex48"]);
const Flex48Cb = useFlex48Cb()
const Flex49Props = useStore((state)=>state["Home"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Flex53Props = useStore((state)=>state["Home"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["Home"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const Div34Props = useStore((state)=>state["Home"]["Div34"]);
const Div34IoProps = useIoStore((state)=>state["Home"]["Div34"]);
const Div34Cb = useDiv34Cb()
const Flex258Props = useStore((state)=>state["Home"]["Flex258"]);
const Flex258IoProps = useIoStore((state)=>state["Home"]["Flex258"]);
const Flex258Cb = useFlex258Cb()
const Div116Props = useStore((state)=>state["Home"]["Div116"]);
const Div116IoProps = useIoStore((state)=>state["Home"]["Div116"]);
const Div116Cb = useDiv116Cb()
const Flex260Props = useStore((state)=>state["Home"]["Flex260"]);
const Flex260IoProps = useIoStore((state)=>state["Home"]["Flex260"]);
const Flex260Cb = useFlex260Cb()
const FAQProps = useStore((state)=>state["Home"]["FAQ"]);
const FAQIoProps = useIoStore((state)=>state["Home"]["FAQ"]);
const FAQCb = useFAQCb()
const FAQ_bottomProps = useStore((state)=>state["Home"]["FAQ_bottom"]);
const FAQ_bottomIoProps = useIoStore((state)=>state["Home"]["FAQ_bottom"]);
const FAQ_bottomCb = useFAQ_bottomCb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const Flex266Props = useStore((state)=>state["Home"]["Flex266"]);
const Flex266IoProps = useIoStore((state)=>state["Home"]["Flex266"]);
const Flex266Cb = useFlex266Cb()
const Flex267Props = useStore((state)=>state["Home"]["Flex267"]);
const Flex267IoProps = useIoStore((state)=>state["Home"]["Flex267"]);
const Flex267Cb = useFlex267Cb()
const Flex278Props = useStore((state)=>state["Home"]["Flex278"]);
const Flex278IoProps = useIoStore((state)=>state["Home"]["Flex278"]);
const Flex278Cb = useFlex278Cb()
const Flex276Props = useStore((state)=>state["Home"]["Flex276"]);
const Flex276IoProps = useIoStore((state)=>state["Home"]["Flex276"]);
const Flex276Cb = useFlex276Cb()
const Flex277Props = useStore((state)=>state["Home"]["Flex277"]);
const Flex277IoProps = useIoStore((state)=>state["Home"]["Flex277"]);
const Flex277Cb = useFlex277Cb()
const FQ_TopProps = useStore((state)=>state["Home"]["FQ_Top"]);
const FQ_TopIoProps = useIoStore((state)=>state["Home"]["FQ_Top"]);
const FQ_TopCb = useFQ_TopCb()
const Contact_WrapperProps = useStore((state)=>state["Home"]["Contact_Wrapper"]);
const Contact_WrapperIoProps = useIoStore((state)=>state["Home"]["Contact_Wrapper"]);
const Contact_WrapperCb = useContact_WrapperCb()
const ContactProps = useStore((state)=>state["Home"]["Contact"]);
const ContactIoProps = useIoStore((state)=>state["Home"]["Contact"]);
const ContactCb = useContactCb()
const Contact_bottomProps = useStore((state)=>state["Home"]["Contact_bottom"]);
const Contact_bottomIoProps = useIoStore((state)=>state["Home"]["Contact_bottom"]);
const Contact_bottomCb = useContact_bottomCb()
const Contact_bottom_leftProps = useStore((state)=>state["Home"]["Contact_bottom_left"]);
const Contact_bottom_leftIoProps = useIoStore((state)=>state["Home"]["Contact_bottom_left"]);
const Contact_bottom_leftCb = useContact_bottom_leftCb()
const Contact_bottom_rightProps = useStore((state)=>state["Home"]["Contact_bottom_right"]);
const Contact_bottom_rightIoProps = useIoStore((state)=>state["Home"]["Contact_bottom_right"]);
const Contact_bottom_rightCb = useContact_bottom_rightCb()
const Flex74Props = useStore((state)=>state["Home"]["Flex74"]);
const Flex74IoProps = useIoStore((state)=>state["Home"]["Flex74"]);
const Flex74Cb = useFlex74Cb()
const Flex285Props = useStore((state)=>state["Home"]["Flex285"]);
const Flex285IoProps = useIoStore((state)=>state["Home"]["Flex285"]);
const Flex285Cb = useFlex285Cb()
const Flex286Props = useStore((state)=>state["Home"]["Flex286"]);
const Flex286IoProps = useIoStore((state)=>state["Home"]["Flex286"]);
const Flex286Cb = useFlex286Cb()
const Contac_topProps = useStore((state)=>state["Home"]["Contac_top"]);
const Contac_topIoProps = useIoStore((state)=>state["Home"]["Contac_top"]);
const Contac_topCb = useContac_topCb()
const All_right_wrapperProps = useStore((state)=>state["Home"]["All_right_wrapper"]);
const All_right_wrapperIoProps = useIoStore((state)=>state["Home"]["All_right_wrapper"]);
const All_right_wrapperCb = useAll_right_wrapperCb()
const All_rightProps = useStore((state)=>state["Home"]["All_right"]);
const All_rightIoProps = useIoStore((state)=>state["Home"]["All_right"]);
const All_rightCb = useAll_rightCb()
const Flex293Props = useStore((state)=>state["Home"]["Flex293"]);
const Flex293IoProps = useIoStore((state)=>state["Home"]["Flex293"]);
const Flex293Cb = useFlex293Cb()
const Trusted_by_wrapperProps = useStore((state)=>state["Home"]["Trusted_by_wrapper"]);
const Trusted_by_wrapperIoProps = useIoStore((state)=>state["Home"]["Trusted_by_wrapper"]);
const Trusted_by_wrapperCb = useTrusted_by_wrapperCb()
const Trusted_byProps = useStore((state)=>state["Home"]["Trusted_by"]);
const Trusted_byIoProps = useIoStore((state)=>state["Home"]["Trusted_by"]);
const Trusted_byCb = useTrusted_byCb()
const Div9Props = useStore((state)=>state["Home"]["Div9"]);
const Div9IoProps = useIoStore((state)=>state["Home"]["Div9"]);
const Div9Cb = useDiv9Cb()
const Flex16Props = useStore((state)=>state["Home"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["Home"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const Image1Props = useStore((state)=>state["Home"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["Home"]["Image1"]);
const Image1Cb = useImage1Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const Image59Props = useStore((state)=>state["Home"]["Image59"]);
const Image59IoProps = useIoStore((state)=>state["Home"]["Image59"]);
const Image59Cb = useImage59Cb()
const TextBox386Props = useStore((state)=>state["Home"]["TextBox386"]);
const TextBox386IoProps = useIoStore((state)=>state["Home"]["TextBox386"]);
const TextBox386Cb = useTextBox386Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const titleProps = useStore((state)=>state["Home"]["title"]);
const titleIoProps = useIoStore((state)=>state["Home"]["title"]);
const titleCb = usetitleCb()
const TextBox87Props = useStore((state)=>state["Home"]["TextBox87"]);
const TextBox87IoProps = useIoStore((state)=>state["Home"]["TextBox87"]);
const TextBox87Cb = useTextBox87Cb()
const TextBox89Props = useStore((state)=>state["Home"]["TextBox89"]);
const TextBox89IoProps = useIoStore((state)=>state["Home"]["TextBox89"]);
const TextBox89Cb = useTextBox89Cb()
const title2Props = useStore((state)=>state["Home"]["title2"]);
const title2IoProps = useIoStore((state)=>state["Home"]["title2"]);
const title2Cb = usetitle2Cb()
const TextBox91Props = useStore((state)=>state["Home"]["TextBox91"]);
const TextBox91IoProps = useIoStore((state)=>state["Home"]["TextBox91"]);
const TextBox91Cb = useTextBox91Cb()
const Image2Props = useStore((state)=>state["Home"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Home"]["Image2"]);
const Image2Cb = useImage2Cb()
const Button18Props = useStore((state)=>state["Home"]["Button18"]);
const Button18IoProps = useIoStore((state)=>state["Home"]["Button18"]);
const Button18Cb = useButton18Cb()
const Image71Props = useStore((state)=>state["Home"]["Image71"]);
const Image71IoProps = useIoStore((state)=>state["Home"]["Image71"]);
const Image71Cb = useImage71Cb()
const TextBox416Props = useStore((state)=>state["Home"]["TextBox416"]);
const TextBox416IoProps = useIoStore((state)=>state["Home"]["TextBox416"]);
const TextBox416Cb = useTextBox416Cb()
const services_textProps = useStore((state)=>state["Home"]["services_text"]);
const services_textIoProps = useIoStore((state)=>state["Home"]["services_text"]);
const services_textCb = useservices_textCb()
const TextBox97Props = useStore((state)=>state["Home"]["TextBox97"]);
const TextBox97IoProps = useIoStore((state)=>state["Home"]["TextBox97"]);
const TextBox97Cb = useTextBox97Cb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox105Props = useStore((state)=>state["Home"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["Home"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const TextBox107Props = useStore((state)=>state["Home"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["Home"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const TextBox108Props = useStore((state)=>state["Home"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["Home"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const TextBox98Props = useStore((state)=>state["Home"]["TextBox98"]);
const TextBox98IoProps = useIoStore((state)=>state["Home"]["TextBox98"]);
const TextBox98Cb = useTextBox98Cb()
const TextBox99Props = useStore((state)=>state["Home"]["TextBox99"]);
const TextBox99IoProps = useIoStore((state)=>state["Home"]["TextBox99"]);
const TextBox99Cb = useTextBox99Cb()
const Image29Props = useStore((state)=>state["Home"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Home"]["Image29"]);
const Image29Cb = useImage29Cb()
const TextBox387Props = useStore((state)=>state["Home"]["TextBox387"]);
const TextBox387IoProps = useIoStore((state)=>state["Home"]["TextBox387"]);
const TextBox387Cb = useTextBox387Cb()
const TextBox388Props = useStore((state)=>state["Home"]["TextBox388"]);
const TextBox388IoProps = useIoStore((state)=>state["Home"]["TextBox388"]);
const TextBox388Cb = useTextBox388Cb()
const TextBox389Props = useStore((state)=>state["Home"]["TextBox389"]);
const TextBox389IoProps = useIoStore((state)=>state["Home"]["TextBox389"]);
const TextBox389Cb = useTextBox389Cb()
const TextBox100Props = useStore((state)=>state["Home"]["TextBox100"]);
const TextBox100IoProps = useIoStore((state)=>state["Home"]["TextBox100"]);
const TextBox100Cb = useTextBox100Cb()
const TextBox101Props = useStore((state)=>state["Home"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["Home"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const Image30Props = useStore((state)=>state["Home"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["Home"]["Image30"]);
const Image30Cb = useImage30Cb()
const TextBox112Props = useStore((state)=>state["Home"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["Home"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const TextBox113Props = useStore((state)=>state["Home"]["TextBox113"]);
const TextBox113IoProps = useIoStore((state)=>state["Home"]["TextBox113"]);
const TextBox113Cb = useTextBox113Cb()
const TextBox114Props = useStore((state)=>state["Home"]["TextBox114"]);
const TextBox114IoProps = useIoStore((state)=>state["Home"]["TextBox114"]);
const TextBox114Cb = useTextBox114Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const project_textProps = useStore((state)=>state["Home"]["project_text"]);
const project_textIoProps = useIoStore((state)=>state["Home"]["project_text"]);
const project_textCb = useproject_textCb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const Button11Props = useStore((state)=>state["Home"]["Button11"]);
const Button11IoProps = useIoStore((state)=>state["Home"]["Button11"]);
const Button11Cb = useButton11Cb()
const Image31Props = useStore((state)=>state["Home"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Home"]["Image31"]);
const Image31Cb = useImage31Cb()
const TextBox115Props = useStore((state)=>state["Home"]["TextBox115"]);
const TextBox115IoProps = useIoStore((state)=>state["Home"]["TextBox115"]);
const TextBox115Cb = useTextBox115Cb()
const TextBox116Props = useStore((state)=>state["Home"]["TextBox116"]);
const TextBox116IoProps = useIoStore((state)=>state["Home"]["TextBox116"]);
const TextBox116Cb = useTextBox116Cb()
const TextBox117Props = useStore((state)=>state["Home"]["TextBox117"]);
const TextBox117IoProps = useIoStore((state)=>state["Home"]["TextBox117"]);
const TextBox117Cb = useTextBox117Cb()
const Image38Props = useStore((state)=>state["Home"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["Home"]["Image38"]);
const Image38Cb = useImage38Cb()
const TextBox136Props = useStore((state)=>state["Home"]["TextBox136"]);
const TextBox136IoProps = useIoStore((state)=>state["Home"]["TextBox136"]);
const TextBox136Cb = useTextBox136Cb()
const TextBox137Props = useStore((state)=>state["Home"]["TextBox137"]);
const TextBox137IoProps = useIoStore((state)=>state["Home"]["TextBox137"]);
const TextBox137Cb = useTextBox137Cb()
const TextBox138Props = useStore((state)=>state["Home"]["TextBox138"]);
const TextBox138IoProps = useIoStore((state)=>state["Home"]["TextBox138"]);
const TextBox138Cb = useTextBox138Cb()
const Image39Props = useStore((state)=>state["Home"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["Home"]["Image39"]);
const Image39Cb = useImage39Cb()
const TextBox139Props = useStore((state)=>state["Home"]["TextBox139"]);
const TextBox139IoProps = useIoStore((state)=>state["Home"]["TextBox139"]);
const TextBox139Cb = useTextBox139Cb()
const TextBox140Props = useStore((state)=>state["Home"]["TextBox140"]);
const TextBox140IoProps = useIoStore((state)=>state["Home"]["TextBox140"]);
const TextBox140Cb = useTextBox140Cb()
const TextBox141Props = useStore((state)=>state["Home"]["TextBox141"]);
const TextBox141IoProps = useIoStore((state)=>state["Home"]["TextBox141"]);
const TextBox141Cb = useTextBox141Cb()
const blogs_textProps = useStore((state)=>state["Home"]["blogs_text"]);
const blogs_textIoProps = useIoStore((state)=>state["Home"]["blogs_text"]);
const blogs_textCb = useblogs_textCb()
const TextBox143Props = useStore((state)=>state["Home"]["TextBox143"]);
const TextBox143IoProps = useIoStore((state)=>state["Home"]["TextBox143"]);
const TextBox143Cb = useTextBox143Cb()
const Image60Props = useStore((state)=>state["Home"]["Image60"]);
const Image60IoProps = useIoStore((state)=>state["Home"]["Image60"]);
const Image60Cb = useImage60Cb()
const TextBox390Props = useStore((state)=>state["Home"]["TextBox390"]);
const TextBox390IoProps = useIoStore((state)=>state["Home"]["TextBox390"]);
const TextBox390Cb = useTextBox390Cb()
const TextBox146Props = useStore((state)=>state["Home"]["TextBox146"]);
const TextBox146IoProps = useIoStore((state)=>state["Home"]["TextBox146"]);
const TextBox146Cb = useTextBox146Cb()
const TextBox147Props = useStore((state)=>state["Home"]["TextBox147"]);
const TextBox147IoProps = useIoStore((state)=>state["Home"]["TextBox147"]);
const TextBox147Cb = useTextBox147Cb()
const TextBox412Props = useStore((state)=>state["Home"]["TextBox412"]);
const TextBox412IoProps = useIoStore((state)=>state["Home"]["TextBox412"]);
const TextBox412Cb = useTextBox412Cb()
const Image68Props = useStore((state)=>state["Home"]["Image68"]);
const Image68IoProps = useIoStore((state)=>state["Home"]["Image68"]);
const Image68Cb = useImage68Cb()
const TextBox154Props = useStore((state)=>state["Home"]["TextBox154"]);
const TextBox154IoProps = useIoStore((state)=>state["Home"]["TextBox154"]);
const TextBox154Cb = useTextBox154Cb()
const TextBox155Props = useStore((state)=>state["Home"]["TextBox155"]);
const TextBox155IoProps = useIoStore((state)=>state["Home"]["TextBox155"]);
const TextBox155Cb = useTextBox155Cb()
const Image69Props = useStore((state)=>state["Home"]["Image69"]);
const Image69IoProps = useIoStore((state)=>state["Home"]["Image69"]);
const Image69Cb = useImage69Cb()
const TextBox413Props = useStore((state)=>state["Home"]["TextBox413"]);
const TextBox413IoProps = useIoStore((state)=>state["Home"]["TextBox413"]);
const TextBox413Cb = useTextBox413Cb()
const TextBox157Props = useStore((state)=>state["Home"]["TextBox157"]);
const TextBox157IoProps = useIoStore((state)=>state["Home"]["TextBox157"]);
const TextBox157Cb = useTextBox157Cb()
const TextBox158Props = useStore((state)=>state["Home"]["TextBox158"]);
const TextBox158IoProps = useIoStore((state)=>state["Home"]["TextBox158"]);
const TextBox158Cb = useTextBox158Cb()
const Image70Props = useStore((state)=>state["Home"]["Image70"]);
const Image70IoProps = useIoStore((state)=>state["Home"]["Image70"]);
const Image70Cb = useImage70Cb()
const TextBox414Props = useStore((state)=>state["Home"]["TextBox414"]);
const TextBox414IoProps = useIoStore((state)=>state["Home"]["TextBox414"]);
const TextBox414Cb = useTextBox414Cb()
const Product_Designer_TextProps = useStore((state)=>state["Home"]["Product_Designer_Text"]);
const Product_Designer_TextIoProps = useIoStore((state)=>state["Home"]["Product_Designer_Text"]);
const Product_Designer_TextCb = useProduct_Designer_TextCb()
const product_design_textProps = useStore((state)=>state["Home"]["product_design_text"]);
const product_design_textIoProps = useIoStore((state)=>state["Home"]["product_design_text"]);
const product_design_textCb = useproduct_design_textCb()
const TextBox161Props = useStore((state)=>state["Home"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["Home"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const Image19Props = useStore((state)=>state["Home"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["Home"]["Image19"]);
const Image19Cb = useImage19Cb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const Image21Props = useStore((state)=>state["Home"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["Home"]["Image21"]);
const Image21Cb = useImage21Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const TextBox166Props = useStore((state)=>state["Home"]["TextBox166"]);
const TextBox166IoProps = useIoStore((state)=>state["Home"]["TextBox166"]);
const TextBox166Cb = useTextBox166Cb()
const TextBox167Props = useStore((state)=>state["Home"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["Home"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const TextBox169Props = useStore((state)=>state["Home"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["Home"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const TextBox223Props = useStore((state)=>state["Home"]["TextBox223"]);
const TextBox223IoProps = useIoStore((state)=>state["Home"]["TextBox223"]);
const TextBox223Cb = useTextBox223Cb()
const TextBox221Props = useStore((state)=>state["Home"]["TextBox221"]);
const TextBox221IoProps = useIoStore((state)=>state["Home"]["TextBox221"]);
const TextBox221Cb = useTextBox221Cb()
const TextBox222Props = useStore((state)=>state["Home"]["TextBox222"]);
const TextBox222IoProps = useIoStore((state)=>state["Home"]["TextBox222"]);
const TextBox222Cb = useTextBox222Cb()
const TextBox226Props = useStore((state)=>state["Home"]["TextBox226"]);
const TextBox226IoProps = useIoStore((state)=>state["Home"]["TextBox226"]);
const TextBox226Cb = useTextBox226Cb()
const TextBox224Props = useStore((state)=>state["Home"]["TextBox224"]);
const TextBox224IoProps = useIoStore((state)=>state["Home"]["TextBox224"]);
const TextBox224Cb = useTextBox224Cb()
const TextBox225Props = useStore((state)=>state["Home"]["TextBox225"]);
const TextBox225IoProps = useIoStore((state)=>state["Home"]["TextBox225"]);
const TextBox225Cb = useTextBox225Cb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const TextBox235Props = useStore((state)=>state["Home"]["TextBox235"]);
const TextBox235IoProps = useIoStore((state)=>state["Home"]["TextBox235"]);
const TextBox235Cb = useTextBox235Cb()
const TextBox231Props = useStore((state)=>state["Home"]["TextBox231"]);
const TextBox231IoProps = useIoStore((state)=>state["Home"]["TextBox231"]);
const TextBox231Cb = useTextBox231Cb()
const TextBox232Props = useStore((state)=>state["Home"]["TextBox232"]);
const TextBox232IoProps = useIoStore((state)=>state["Home"]["TextBox232"]);
const TextBox232Cb = useTextBox232Cb()
const Image42Props = useStore((state)=>state["Home"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["Home"]["Image42"]);
const Image42Cb = useImage42Cb()
const TextBox264Props = useStore((state)=>state["Home"]["TextBox264"]);
const TextBox264IoProps = useIoStore((state)=>state["Home"]["TextBox264"]);
const TextBox264Cb = useTextBox264Cb()
const Image52Props = useStore((state)=>state["Home"]["Image52"]);
const Image52IoProps = useIoStore((state)=>state["Home"]["Image52"]);
const Image52Cb = useImage52Cb()
const TextBox263Props = useStore((state)=>state["Home"]["TextBox263"]);
const TextBox263IoProps = useIoStore((state)=>state["Home"]["TextBox263"]);
const TextBox263Cb = useTextBox263Cb()
const TextBox265Props = useStore((state)=>state["Home"]["TextBox265"]);
const TextBox265IoProps = useIoStore((state)=>state["Home"]["TextBox265"]);
const TextBox265Cb = useTextBox265Cb()
const TextBox399Props = useStore((state)=>state["Home"]["TextBox399"]);
const TextBox399IoProps = useIoStore((state)=>state["Home"]["TextBox399"]);
const TextBox399Cb = useTextBox399Cb()
const TextBox398Props = useStore((state)=>state["Home"]["TextBox398"]);
const TextBox398IoProps = useIoStore((state)=>state["Home"]["TextBox398"]);
const TextBox398Cb = useTextBox398Cb()
const TextBox397Props = useStore((state)=>state["Home"]["TextBox397"]);
const TextBox397IoProps = useIoStore((state)=>state["Home"]["TextBox397"]);
const TextBox397Cb = useTextBox397Cb()
const Image63Props = useStore((state)=>state["Home"]["Image63"]);
const Image63IoProps = useIoStore((state)=>state["Home"]["Image63"]);
const Image63Cb = useImage63Cb()
const testimonial_textProps = useStore((state)=>state["Home"]["testimonial_text"]);
const testimonial_textIoProps = useIoStore((state)=>state["Home"]["testimonial_text"]);
const testimonial_textCb = usetestimonial_textCb()
const TextBox274Props = useStore((state)=>state["Home"]["TextBox274"]);
const TextBox274IoProps = useIoStore((state)=>state["Home"]["TextBox274"]);
const TextBox274Cb = useTextBox274Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const TextBox275Props = useStore((state)=>state["Home"]["TextBox275"]);
const TextBox275IoProps = useIoStore((state)=>state["Home"]["TextBox275"]);
const TextBox275Cb = useTextBox275Cb()
const TextBox276Props = useStore((state)=>state["Home"]["TextBox276"]);
const TextBox276IoProps = useIoStore((state)=>state["Home"]["TextBox276"]);
const TextBox276Cb = useTextBox276Cb()
const TextBox277Props = useStore((state)=>state["Home"]["TextBox277"]);
const TextBox277IoProps = useIoStore((state)=>state["Home"]["TextBox277"]);
const TextBox277Cb = useTextBox277Cb()
const Button12Props = useStore((state)=>state["Home"]["Button12"]);
const Button12IoProps = useIoStore((state)=>state["Home"]["Button12"]);
const Button12Cb = useButton12Cb()
const Button16Props = useStore((state)=>state["Home"]["Button16"]);
const Button16IoProps = useIoStore((state)=>state["Home"]["Button16"]);
const Button16Cb = useButton16Cb()
const TextBox294Props = useStore((state)=>state["Home"]["TextBox294"]);
const TextBox294IoProps = useIoStore((state)=>state["Home"]["TextBox294"]);
const TextBox294Cb = useTextBox294Cb()
const TextBox295Props = useStore((state)=>state["Home"]["TextBox295"]);
const TextBox295IoProps = useIoStore((state)=>state["Home"]["TextBox295"]);
const TextBox295Cb = useTextBox295Cb()
const TextBox293Props = useStore((state)=>state["Home"]["TextBox293"]);
const TextBox293IoProps = useIoStore((state)=>state["Home"]["TextBox293"]);
const TextBox293Cb = useTextBox293Cb()
const TextBox296Props = useStore((state)=>state["Home"]["TextBox296"]);
const TextBox296IoProps = useIoStore((state)=>state["Home"]["TextBox296"]);
const TextBox296Cb = useTextBox296Cb()
const TextBox297Props = useStore((state)=>state["Home"]["TextBox297"]);
const TextBox297IoProps = useIoStore((state)=>state["Home"]["TextBox297"]);
const TextBox297Cb = useTextBox297Cb()
const TextBox298Props = useStore((state)=>state["Home"]["TextBox298"]);
const TextBox298IoProps = useIoStore((state)=>state["Home"]["TextBox298"]);
const TextBox298Cb = useTextBox298Cb()
const TextBox317Props = useStore((state)=>state["Home"]["TextBox317"]);
const TextBox317IoProps = useIoStore((state)=>state["Home"]["TextBox317"]);
const TextBox317Cb = useTextBox317Cb()
const TextBox318Props = useStore((state)=>state["Home"]["TextBox318"]);
const TextBox318IoProps = useIoStore((state)=>state["Home"]["TextBox318"]);
const TextBox318Cb = useTextBox318Cb()
const TextBox319Props = useStore((state)=>state["Home"]["TextBox319"]);
const TextBox319IoProps = useIoStore((state)=>state["Home"]["TextBox319"]);
const TextBox319Cb = useTextBox319Cb()
const TextBox320Props = useStore((state)=>state["Home"]["TextBox320"]);
const TextBox320IoProps = useIoStore((state)=>state["Home"]["TextBox320"]);
const TextBox320Cb = useTextBox320Cb()
const TextBox321Props = useStore((state)=>state["Home"]["TextBox321"]);
const TextBox321IoProps = useIoStore((state)=>state["Home"]["TextBox321"]);
const TextBox321Cb = useTextBox321Cb()
const TextBox322Props = useStore((state)=>state["Home"]["TextBox322"]);
const TextBox322IoProps = useIoStore((state)=>state["Home"]["TextBox322"]);
const TextBox322Cb = useTextBox322Cb()
const faq_textProps = useStore((state)=>state["Home"]["faq_text"]);
const faq_textIoProps = useIoStore((state)=>state["Home"]["faq_text"]);
const faq_textCb = usefaq_textCb()
const TextBox280Props = useStore((state)=>state["Home"]["TextBox280"]);
const TextBox280IoProps = useIoStore((state)=>state["Home"]["TextBox280"]);
const TextBox280Cb = useTextBox280Cb()
const TextBox330Props = useStore((state)=>state["Home"]["TextBox330"]);
const TextBox330IoProps = useIoStore((state)=>state["Home"]["TextBox330"]);
const TextBox330Cb = useTextBox330Cb()
const TextBox331Props = useStore((state)=>state["Home"]["TextBox331"]);
const TextBox331IoProps = useIoStore((state)=>state["Home"]["TextBox331"]);
const TextBox331Cb = useTextBox331Cb()
const TextBox359Props = useStore((state)=>state["Home"]["TextBox359"]);
const TextBox359IoProps = useIoStore((state)=>state["Home"]["TextBox359"]);
const TextBox359Cb = useTextBox359Cb()
const TextBox78Props = useStore((state)=>state["Home"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Home"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const TextBox342Props = useStore((state)=>state["Home"]["TextBox342"]);
const TextBox342IoProps = useIoStore((state)=>state["Home"]["TextBox342"]);
const TextBox342Cb = useTextBox342Cb()
const TextBox343Props = useStore((state)=>state["Home"]["TextBox343"]);
const TextBox343IoProps = useIoStore((state)=>state["Home"]["TextBox343"]);
const TextBox343Cb = useTextBox343Cb()
const TextBox360Props = useStore((state)=>state["Home"]["TextBox360"]);
const TextBox360IoProps = useIoStore((state)=>state["Home"]["TextBox360"]);
const TextBox360Cb = useTextBox360Cb()
const TextBox361Props = useStore((state)=>state["Home"]["TextBox361"]);
const TextBox361IoProps = useIoStore((state)=>state["Home"]["TextBox361"]);
const TextBox361Cb = useTextBox361Cb()
const TextBox362Props = useStore((state)=>state["Home"]["TextBox362"]);
const TextBox362IoProps = useIoStore((state)=>state["Home"]["TextBox362"]);
const TextBox362Cb = useTextBox362Cb()
const TextBox363Props = useStore((state)=>state["Home"]["TextBox363"]);
const TextBox363IoProps = useIoStore((state)=>state["Home"]["TextBox363"]);
const TextBox363Cb = useTextBox363Cb()
const TextBox364Props = useStore((state)=>state["Home"]["TextBox364"]);
const TextBox364IoProps = useIoStore((state)=>state["Home"]["TextBox364"]);
const TextBox364Cb = useTextBox364Cb()
const TextBox365Props = useStore((state)=>state["Home"]["TextBox365"]);
const TextBox365IoProps = useIoStore((state)=>state["Home"]["TextBox365"]);
const TextBox365Cb = useTextBox365Cb()
const contact_textProps = useStore((state)=>state["Home"]["contact_text"]);
const contact_textIoProps = useIoStore((state)=>state["Home"]["contact_text"]);
const contact_textCb = usecontact_textCb()
const TextBox327Props = useStore((state)=>state["Home"]["TextBox327"]);
const TextBox327IoProps = useIoStore((state)=>state["Home"]["TextBox327"]);
const TextBox327Cb = useTextBox327Cb()
const TextBox375Props = useStore((state)=>state["Home"]["TextBox375"]);
const TextBox375IoProps = useIoStore((state)=>state["Home"]["TextBox375"]);
const TextBox375Cb = useTextBox375Cb()
const TextBox376Props = useStore((state)=>state["Home"]["TextBox376"]);
const TextBox376IoProps = useIoStore((state)=>state["Home"]["TextBox376"]);
const TextBox376Cb = useTextBox376Cb()
const TextBox377Props = useStore((state)=>state["Home"]["TextBox377"]);
const TextBox377IoProps = useIoStore((state)=>state["Home"]["TextBox377"]);
const TextBox377Cb = useTextBox377Cb()
const TextBox378Props = useStore((state)=>state["Home"]["TextBox378"]);
const TextBox378IoProps = useIoStore((state)=>state["Home"]["TextBox378"]);
const TextBox378Cb = useTextBox378Cb()
const TextBox379Props = useStore((state)=>state["Home"]["TextBox379"]);
const TextBox379IoProps = useIoStore((state)=>state["Home"]["TextBox379"]);
const TextBox379Cb = useTextBox379Cb()
const TextBox380Props = useStore((state)=>state["Home"]["TextBox380"]);
const TextBox380IoProps = useIoStore((state)=>state["Home"]["TextBox380"]);
const TextBox380Cb = useTextBox380Cb()
const TextBox381Props = useStore((state)=>state["Home"]["TextBox381"]);
const TextBox381IoProps = useIoStore((state)=>state["Home"]["TextBox381"]);
const TextBox381Cb = useTextBox381Cb()
const TextBox383Props = useStore((state)=>state["Home"]["TextBox383"]);
const TextBox383IoProps = useIoStore((state)=>state["Home"]["TextBox383"]);
const TextBox383Cb = useTextBox383Cb()
const TextBox22Props = useStore((state)=>state["Home"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["Home"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const Image3Props = useStore((state)=>state["Home"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["Home"]["Image3"]);
const Image3Cb = useImage3Cb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const Image28Props = useStore((state)=>state["Home"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["Home"]["Image28"]);
const Image28Cb = useImage28Cb()

  return (<>
  <Div className="p-Home Header bpt" {...HeaderProps} {...HeaderCb} {...HeaderIoProps}>
<Flex className="p-Home div bpt" {...divProps} {...divCb} {...divIoProps}>
<Image className="p-Home Image1 bpt" {...Image1Props} {...Image1Cb} {...Image1IoProps}/>
<Div className="p-Home Div1 bpt" {...Div1Props} {...Div1Cb} {...Div1IoProps}>
<Flex className="p-Home Flex5 bpt" {...Flex5Props} {...Flex5Cb} {...Flex5IoProps}>
<TextBox className="p-Home TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
<TextBox className="p-Home TextBox17 bpt" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
<TextBox className="p-Home TextBox16 bpt" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
<TextBox className="p-Home TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<Flex className="p-Home Flex301 bpt" {...Flex301Props} {...Flex301Cb} {...Flex301IoProps}>
<TextBox className="p-Home TextBox386 bpt" {...TextBox386Props} {...TextBox386Cb} {...TextBox386IoProps}/>
<Image className="p-Home Image59 bpt" {...Image59Props} {...Image59Cb} {...Image59IoProps}/>
</Flex>
</Flex>
</Div>
</Flex>
</Div>
<Flex className="p-Home Home_Hero bpt" {...Home_HeroProps} {...Home_HeroCb} {...Home_HeroIoProps}>
<Flex className="p-Home Flex13 bpt" {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<Div className="p-Home Div5 bpt" {...Div5Props} {...Div5Cb} {...Div5IoProps}>
<Div className="p-Home Div6 bpt" {...Div6Props} {...Div6Cb} {...Div6IoProps}>
<TextBox className="p-Home title bpt" {...titleProps} {...titleCb} {...titleIoProps}/>
<TextBox className="p-Home TextBox89 bpt" {...TextBox89Props} {...TextBox89Cb} {...TextBox89IoProps}/>
<TextBox className="p-Home title2 bpt" {...title2Props} {...title2Cb} {...title2IoProps}/>
<TextBox className="p-Home TextBox91 bpt" {...TextBox91Props} {...TextBox91Cb} {...TextBox91IoProps}/>
<TextBox className="p-Home TextBox87 bpt" {...TextBox87Props} {...TextBox87Cb} {...TextBox87IoProps}/>
</Div>
<TextBox className="p-Home TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
</Div>
<Flex className="p-Home Flex354 bpt" {...Flex354Props} {...Flex354Cb} {...Flex354IoProps}>
<Image className="p-Home Image2 bpt" {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Call_&_Cv bpt" {...Call_&_CvProps} {...Call_&_CvCb} {...Call_&_CvIoProps}>
<Flex className="p-Home Flex340 bpt" {...Flex340Props} {...Flex340Cb} {...Flex340IoProps}>
<Button className="p-Home Button18 bpt" {...Button18Props} {...Button18Cb} {...Button18IoProps}/>
<Flex className="p-Home Flex339 bpt" {...Flex339Props} {...Flex339Cb} {...Flex339IoProps}>
<TextBox className="p-Home TextBox416 bpt" {...TextBox416Props} {...TextBox416Cb} {...TextBox416IoProps}/>
<Image className="p-Home Image71 bpt" {...Image71Props} {...Image71Cb} {...Image71IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Trusted_by_wrapper bpt" {...Trusted_by_wrapperProps} {...Trusted_by_wrapperCb} {...Trusted_by_wrapperIoProps}>
<Flex className="p-Home Trusted_by bpt" {...Trusted_byProps} {...Trusted_byCb} {...Trusted_byIoProps}>
<Div className="p-Home Div9 bpt" {...Div9Props} {...Div9Cb} {...Div9IoProps}>
<TextBox className="p-Home TextBox22 bpt" {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
</Div>
<Flex className="p-Home Flex16 bpt" {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<Image className="p-Home Image3 bpt" {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
<Image className="p-Home Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
<Image className="p-Home Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
<Image className="p-Home Image28 bpt" {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
</Flex>
</Flex>
</Flex>
<Div className="p-Home Services__wrapper bpt" {...Services__wrapperProps} {...Services__wrapperCb} {...Services__wrapperIoProps}>
<Flex className="p-Home Services bpt" {...ServicesProps} {...ServicesCb} {...ServicesIoProps}>
<TextBox className="p-Home services_text bpt" {...services_textProps} {...services_textCb} {...services_textIoProps}/>
<TextBox className="p-Home TextBox97 bpt" {...TextBox97Props} {...TextBox97Cb} {...TextBox97IoProps}/>
<Flex className="p-Home Flex20 bpt" {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<Flex className="p-Home Flex66 bpt" {...Flex66Props} {...Flex66Cb} {...Flex66IoProps}>
<Image className="p-Home Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
<TextBox className="p-Home TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
<TextBox className="p-Home TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<Div className="p-Home Div13 bpt" {...Div13Props} {...Div13Cb} {...Div13IoProps}>
<Flex className="p-Home Flex89 bpt" {...Flex89Props} {...Flex89Cb} {...Flex89IoProps}>
<TextBox className="p-Home TextBox105 bpt" {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
<TextBox className="p-Home TextBox107 bpt" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
<TextBox className="p-Home TextBox108 bpt" {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
</Flex>
</Div>
</Flex>
<Flex className="p-Home Flex87 bpt" {...Flex87Props} {...Flex87Cb} {...Flex87IoProps}>
<Image className="p-Home Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
<TextBox className="p-Home TextBox99 bpt" {...TextBox99Props} {...TextBox99Cb} {...TextBox99IoProps}/>
<TextBox className="p-Home TextBox98 bpt" {...TextBox98Props} {...TextBox98Cb} {...TextBox98IoProps}/>
<Div className="p-Home Div127 bpt" {...Div127Props} {...Div127Cb} {...Div127IoProps}>
<Flex className="p-Home Flex303 bpt" {...Flex303Props} {...Flex303Cb} {...Flex303IoProps}>
<TextBox className="p-Home TextBox387 bpt" {...TextBox387Props} {...TextBox387Cb} {...TextBox387IoProps}/>
<TextBox className="p-Home TextBox388 bpt" {...TextBox388Props} {...TextBox388Cb} {...TextBox388IoProps}/>
<TextBox className="p-Home TextBox389 bpt" {...TextBox389Props} {...TextBox389Cb} {...TextBox389IoProps}/>
</Flex>
</Div>
</Flex>
<Flex className="p-Home Flex88 bpt" {...Flex88Props} {...Flex88Cb} {...Flex88IoProps}>
<Image className="p-Home Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
<TextBox className="p-Home TextBox101 bpt" {...TextBox101Props} {...TextBox101Cb} {...TextBox101IoProps}/>
<TextBox className="p-Home TextBox100 bpt" {...TextBox100Props} {...TextBox100Cb} {...TextBox100IoProps}/>
<Div className="p-Home Div47 bpt" {...Div47Props} {...Div47Cb} {...Div47IoProps}>
<Flex className="p-Home Flex91 bpt" {...Flex91Props} {...Flex91Cb} {...Flex91IoProps}>
<TextBox className="p-Home TextBox114 bpt" {...TextBox114Props} {...TextBox114Cb} {...TextBox114IoProps}/>
<TextBox className="p-Home TextBox113 bpt" {...TextBox113Props} {...TextBox113Cb} {...TextBox113IoProps}/>
<TextBox className="p-Home TextBox112 bpt" {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
</Flex>
</Div>
</Flex>
</Flex>
</Flex>
</Div>
<Flex className="p-Home Projects bpt" {...ProjectsProps} {...ProjectsCb} {...ProjectsIoProps}>
<Flex className="p-Home Flex25 bpt" {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<Div className="p-Home Div16 bpt" {...Div16Props} {...Div16Cb} {...Div16IoProps}>
<TextBox className="p-Home project_text bpt" {...project_textProps} {...project_textCb} {...project_textIoProps}/>
<TextBox className="p-Home TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
</Div>
<Flex className="p-Home Flex92 bpt" {...Flex92Props} {...Flex92Cb} {...Flex92IoProps}>
<Button className="p-Home Button11 bpt" {...Button11Props} {...Button11Cb} {...Button11IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex27 bpt" {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<Flex className="p-Home Flex118 bpt" {...Flex118Props} {...Flex118Cb} {...Flex118IoProps}>
<Image className="p-Home Image38 bpt" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
<Flex className="p-Home Flex117 bpt" {...Flex117Props} {...Flex117Cb} {...Flex117IoProps}>
<Flex className="p-Home Flex116 bpt" {...Flex116Props} {...Flex116Cb} {...Flex116IoProps}>
<TextBox className="p-Home TextBox138 bpt" {...TextBox138Props} {...TextBox138Cb} {...TextBox138IoProps}/>
<TextBox className="p-Home TextBox136 bpt" {...TextBox136Props} {...TextBox136Cb} {...TextBox136IoProps}/>
<TextBox className="p-Home TextBox137 bpt" {...TextBox137Props} {...TextBox137Cb} {...TextBox137IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex121 bpt" {...Flex121Props} {...Flex121Cb} {...Flex121IoProps}>
<Image className="p-Home Image39 bpt" {...Image39Props} {...Image39Cb} {...Image39IoProps}/>
<Flex className="p-Home Flex120 bpt" {...Flex120Props} {...Flex120Cb} {...Flex120IoProps}>
<Flex className="p-Home Flex119 bpt" {...Flex119Props} {...Flex119Cb} {...Flex119IoProps}>
<TextBox className="p-Home TextBox141 bpt" {...TextBox141Props} {...TextBox141Cb} {...TextBox141IoProps}/>
<TextBox className="p-Home TextBox139 bpt" {...TextBox139Props} {...TextBox139Cb} {...TextBox139IoProps}/>
<TextBox className="p-Home TextBox140 bpt" {...TextBox140Props} {...TextBox140Cb} {...TextBox140IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex93 bpt" {...Flex93Props} {...Flex93Cb} {...Flex93IoProps}>
<Image className="p-Home Image31 bpt" {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
<Flex className="p-Home Flex96 bpt" {...Flex96Props} {...Flex96Cb} {...Flex96IoProps}>
<Flex className="p-Home Flex97 bpt" {...Flex97Props} {...Flex97Cb} {...Flex97IoProps}>
<TextBox className="p-Home TextBox115 bpt" {...TextBox115Props} {...TextBox115Cb} {...TextBox115IoProps}/>
<TextBox className="p-Home TextBox117 bpt" {...TextBox117Props} {...TextBox117Cb} {...TextBox117IoProps}/>
<TextBox className="p-Home TextBox116 bpt" {...TextBox116Props} {...TextBox116Cb} {...TextBox116IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Blogs_Wrapper bpt" {...Blogs_WrapperProps} {...Blogs_WrapperCb} {...Blogs_WrapperIoProps}>
<Flex className="p-Home Blogs bpt" {...BlogsProps} {...BlogsCb} {...BlogsIoProps}>
<Div className="p-Home Blogs_Left bpt" {...Blogs_LeftProps} {...Blogs_LeftCb} {...Blogs_LeftIoProps}>
<TextBox className="p-Home blogs_text bpt" {...blogs_textProps} {...blogs_textCb} {...blogs_textIoProps}/>
<TextBox className="p-Home TextBox143 bpt" {...TextBox143Props} {...TextBox143Cb} {...TextBox143IoProps}/>
<Flex className="p-Home Flex304 bpt" {...Flex304Props} {...Flex304Cb} {...Flex304IoProps}>
<TextBox className="p-Home TextBox390 bpt" {...TextBox390Props} {...TextBox390Cb} {...TextBox390IoProps}/>
<Image className="p-Home Image60 bpt" {...Image60Props} {...Image60Cb} {...Image60IoProps}/>
</Flex>
</Div>
<Flex className="p-Home Blogs_Right bpt" {...Blogs_RightProps} {...Blogs_RightCb} {...Blogs_RightIoProps}>
<Div className="p-Home Div18 bpt" {...Div18Props} {...Div18Cb} {...Div18IoProps}>
<TextBox className="p-Home TextBox146 bpt" {...TextBox146Props} {...TextBox146Cb} {...TextBox146IoProps}/>
<TextBox className="p-Home TextBox147 bpt" {...TextBox147Props} {...TextBox147Cb} {...TextBox147IoProps}/>
<Flex className="p-Home Flex335 bpt" {...Flex335Props} {...Flex335Cb} {...Flex335IoProps}>
<TextBox className="p-Home TextBox412 bpt" {...TextBox412Props} {...TextBox412Cb} {...TextBox412IoProps}/>
<Image className="p-Home Image68 bpt" {...Image68Props} {...Image68Cb} {...Image68IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div50 bpt" {...Div50Props} {...Div50Cb} {...Div50IoProps}>
<TextBox className="p-Home TextBox155 bpt" {...TextBox155Props} {...TextBox155Cb} {...TextBox155IoProps}/>
<TextBox className="p-Home TextBox154 bpt" {...TextBox154Props} {...TextBox154Cb} {...TextBox154IoProps}/>
<Flex className="p-Home Flex336 bpt" {...Flex336Props} {...Flex336Cb} {...Flex336IoProps}>
<TextBox className="p-Home TextBox413 bpt" {...TextBox413Props} {...TextBox413Cb} {...TextBox413IoProps}/>
<Image className="p-Home Image69 bpt" {...Image69Props} {...Image69Cb} {...Image69IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div51 bpt" {...Div51Props} {...Div51Cb} {...Div51IoProps}>
<TextBox className="p-Home TextBox158 bpt" {...TextBox158Props} {...TextBox158Cb} {...TextBox158IoProps}/>
<TextBox className="p-Home TextBox157 bpt" {...TextBox157Props} {...TextBox157Cb} {...TextBox157IoProps}/>
<Flex className="p-Home Flex337 bpt" {...Flex337Props} {...Flex337Cb} {...Flex337IoProps}>
<TextBox className="p-Home TextBox414 bpt" {...TextBox414Props} {...TextBox414Cb} {...TextBox414IoProps}/>
<Image className="p-Home Image70 bpt" {...Image70Props} {...Image70Cb} {...Image70IoProps}/>
</Flex>
</Div>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex32 bpt" {...Flex32Props} {...Flex32Cb} {...Flex32IoProps}>
<Flex className="p-Home Flex33 bpt" {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<Flex className="p-Home Product_Designer bpt" {...Product_DesignerProps} {...Product_DesignerCb} {...Product_DesignerIoProps}>
<Flex className="p-Home Products_designer_Top bpt" {...Products_designer_TopProps} {...Products_designer_TopCb} {...Products_designer_TopIoProps}>
<Div className="p-Home Produc_Designer_Title bpt" {...Produc_Designer_TitleProps} {...Produc_Designer_TitleCb} {...Produc_Designer_TitleIoProps}>
<TextBox className="p-Home product_design_text bpt" {...product_design_textProps} {...product_design_textCb} {...product_design_textIoProps}/>
<TextBox className="p-Home TextBox161 bpt" {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
</Div>
<TextBox className="p-Home Product_Designer_Text bpt" {...Product_Designer_TextProps} {...Product_Designer_TextCb} {...Product_Designer_TextIoProps}/>
</Flex>
<Flex className="p-Home Product_Designer_Bottom bpt" {...Product_Designer_BottomProps} {...Product_Designer_BottomCb} {...Product_Designer_BottomIoProps}>
<Image className="p-Home Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
<Image className="p-Home Image19 bpt" {...Image19Props} {...Image19Cb} {...Image19IoProps}/>
<Flex className="p-Home Flex39 bpt" {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<Image className="p-Home Image20 bpt" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
<Image className="p-Home Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Eduction_&_WE_&Wrapper bpt" {...Eduction_&_WE_&WrapperProps} {...Eduction_&_WE_&WrapperCb} {...Eduction_&_WE_&WrapperIoProps}>
<Flex className="p-Home Eduction_&_WE bpt" {...Eduction_&_WEProps} {...Eduction_&_WECb} {...Eduction_&_WEIoProps}>
<Flex className="p-Home Education bpt" {...EducationProps} {...EducationCb} {...EducationIoProps}>
<TextBox className="p-Home TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
<Flex className="p-Home Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Div className="p-Home Div24 bpt" {...Div24Props} {...Div24Cb} {...Div24IoProps}>
<Flex className="p-Home Flex129 bpt" {...Flex129Props} {...Flex129Cb} {...Flex129IoProps}>
<Div className="p-Home Div54 bpt" {...Div54Props} {...Div54Cb} {...Div54IoProps}>
<Flex className="p-Home Flex134 bpt" {...Flex134Props} {...Flex134Cb} {...Flex134IoProps}>
<TextBox className="p-Home TextBox166 bpt" {...TextBox166Props} {...TextBox166Cb} {...TextBox166IoProps}/>
<TextBox className="p-Home TextBox167 bpt" {...TextBox167Props} {...TextBox167Cb} {...TextBox167IoProps}/>
</Flex>
</Div>
<Flex className="p-Home Flex131 bpt" {...Flex131Props} {...Flex131Cb} {...Flex131IoProps}>
<TextBox className="p-Home TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home Div87 bpt" {...Div87Props} {...Div87Cb} {...Div87IoProps}>
<Flex className="p-Home Flex188 bpt" {...Flex188Props} {...Flex188Cb} {...Flex188IoProps}>
<Div className="p-Home Div86 bpt" {...Div86Props} {...Div86Cb} {...Div86IoProps}>
<Flex className="p-Home Flex186 bpt" {...Flex186Props} {...Flex186Cb} {...Flex186IoProps}>
<TextBox className="p-Home TextBox222 bpt" {...TextBox222Props} {...TextBox222Cb} {...TextBox222IoProps}/>
<TextBox className="p-Home TextBox221 bpt" {...TextBox221Props} {...TextBox221Cb} {...TextBox221IoProps}/>
</Flex>
</Div>
<Flex className="p-Home Flex187 bpt" {...Flex187Props} {...Flex187Cb} {...Flex187IoProps}>
<TextBox className="p-Home TextBox223 bpt" {...TextBox223Props} {...TextBox223Cb} {...TextBox223IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home Div89 bpt" {...Div89Props} {...Div89Cb} {...Div89IoProps}>
<Flex className="p-Home Flex191 bpt" {...Flex191Props} {...Flex191Cb} {...Flex191IoProps}>
<Div className="p-Home Div88 bpt" {...Div88Props} {...Div88Cb} {...Div88IoProps}>
<Flex className="p-Home Flex189 bpt" {...Flex189Props} {...Flex189Cb} {...Flex189IoProps}>
<TextBox className="p-Home TextBox225 bpt" {...TextBox225Props} {...TextBox225Cb} {...TextBox225IoProps}/>
<TextBox className="p-Home TextBox224 bpt" {...TextBox224Props} {...TextBox224Cb} {...TextBox224IoProps}/>
</Flex>
</Div>
<Flex className="p-Home Flex190 bpt" {...Flex190Props} {...Flex190Cb} {...Flex190IoProps}>
<TextBox className="p-Home TextBox226 bpt" {...TextBox226Props} {...TextBox226Cb} {...TextBox226IoProps}/>
</Flex>
</Flex>
</Div>
</Flex>
</Flex>
<Flex className="p-Home Work_Exp bpt" {...Work_ExpProps} {...Work_ExpCb} {...Work_ExpIoProps}>
<TextBox className="p-Home TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
<Flex className="p-Home Flex201 bpt" {...Flex201Props} {...Flex201Cb} {...Flex201IoProps}>
<Div className="p-Home Div95 bpt" {...Div95Props} {...Div95Cb} {...Div95IoProps}>
<Flex className="p-Home Flex200 bpt" {...Flex200Props} {...Flex200Cb} {...Flex200IoProps}>
<Div className="p-Home Div92 bpt" {...Div92Props} {...Div92Cb} {...Div92IoProps}>
<Flex className="p-Home Flex194 bpt" {...Flex194Props} {...Flex194Cb} {...Flex194IoProps}>
<Flex className="p-Home Flex202 bpt" {...Flex202Props} {...Flex202Cb} {...Flex202IoProps}>
<Image className="p-Home Image42 bpt" {...Image42Props} {...Image42Cb} {...Image42IoProps}/>
<TextBox className="p-Home TextBox232 bpt" {...TextBox232Props} {...TextBox232Cb} {...TextBox232IoProps}/>
</Flex>
<TextBox className="p-Home TextBox231 bpt" {...TextBox231Props} {...TextBox231Cb} {...TextBox231IoProps}/>
</Flex>
</Div>
<Flex className="p-Home Flex197 bpt" {...Flex197Props} {...Flex197Cb} {...Flex197IoProps}>
<TextBox className="p-Home TextBox235 bpt" {...TextBox235Props} {...TextBox235Cb} {...TextBox235IoProps}/>
</Flex>
</Flex>
</Div>
</Flex>
<Flex className="p-Home Flex244 bpt" {...Flex244Props} {...Flex244Cb} {...Flex244IoProps}>
<Div className="p-Home Div111 bpt" {...Div111Props} {...Div111Cb} {...Div111IoProps}>
<Flex className="p-Home Flex243 bpt" {...Flex243Props} {...Flex243Cb} {...Flex243IoProps}>
<Div className="p-Home Div110 bpt" {...Div110Props} {...Div110Cb} {...Div110IoProps}>
<Flex className="p-Home Flex241 bpt" {...Flex241Props} {...Flex241Cb} {...Flex241IoProps}>
<Flex className="p-Home Flex240 bpt" {...Flex240Props} {...Flex240Cb} {...Flex240IoProps}>
<Image className="p-Home Image52 bpt" {...Image52Props} {...Image52Cb} {...Image52IoProps}/>
<TextBox className="p-Home TextBox263 bpt" {...TextBox263Props} {...TextBox263Cb} {...TextBox263IoProps}/>
</Flex>
<TextBox className="p-Home TextBox264 bpt" {...TextBox264Props} {...TextBox264Cb} {...TextBox264IoProps}/>
</Flex>
</Div>
<Flex className="p-Home Flex242 bpt" {...Flex242Props} {...Flex242Cb} {...Flex242IoProps}>
<TextBox className="p-Home TextBox265 bpt" {...TextBox265Props} {...TextBox265Cb} {...TextBox265IoProps}/>
</Flex>
</Flex>
</Div>
</Flex>
<Flex className="p-Home Flex318 bpt" {...Flex318Props} {...Flex318Cb} {...Flex318IoProps}>
<Div className="p-Home Div132 bpt" {...Div132Props} {...Div132Cb} {...Div132IoProps}>
<Flex className="p-Home Flex317 bpt" {...Flex317Props} {...Flex317Cb} {...Flex317IoProps}>
<Div className="p-Home Div131 bpt" {...Div131Props} {...Div131Cb} {...Div131IoProps}>
<Flex className="p-Home Flex315 bpt" {...Flex315Props} {...Flex315Cb} {...Flex315IoProps}>
<Flex className="p-Home Flex314 bpt" {...Flex314Props} {...Flex314Cb} {...Flex314IoProps}>
<Image className="p-Home Image63 bpt" {...Image63Props} {...Image63Cb} {...Image63IoProps}/>
<TextBox className="p-Home TextBox397 bpt" {...TextBox397Props} {...TextBox397Cb} {...TextBox397IoProps}/>
</Flex>
<TextBox className="p-Home TextBox398 bpt" {...TextBox398Props} {...TextBox398Cb} {...TextBox398IoProps}/>
</Flex>
</Div>
<Flex className="p-Home Flex316 bpt" {...Flex316Props} {...Flex316Cb} {...Flex316IoProps}>
<TextBox className="p-Home TextBox399 bpt" {...TextBox399Props} {...TextBox399Cb} {...TextBox399IoProps}/>
</Flex>
</Flex>
</Div>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Testimonials_Wrapper bpt" {...Testimonials_WrapperProps} {...Testimonials_WrapperCb} {...Testimonials_WrapperIoProps}>
<Div className="p-Home Testimonial bpt" {...TestimonialProps} {...TestimonialCb} {...TestimonialIoProps}>
<TextBox className="p-Home testimonial_text bpt" {...testimonial_textProps} {...testimonial_textCb} {...testimonial_textIoProps}/>
<TextBox className="p-Home TextBox274 bpt" {...TextBox274Props} {...TextBox274Cb} {...TextBox274IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex48 bpt" {...Flex48Props} {...Flex48Cb} {...Flex48IoProps}>
<Flex className="p-Home Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<Flex className="p-Home Flex53 bpt" {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<Image className="p-Home Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
</Flex>
<Div className="p-Home Div34 bpt" {...Div34Props} {...Div34Cb} {...Div34IoProps}>
<Image className="p-Home Image25 bpt" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
<TextBox className="p-Home TextBox275 bpt" {...TextBox275Props} {...TextBox275Cb} {...TextBox275IoProps}/>
<Flex className="p-Home Flex258 bpt" {...Flex258Props} {...Flex258Cb} {...Flex258IoProps}>
<Div className="p-Home Div116 bpt" {...Div116Props} {...Div116Cb} {...Div116IoProps}>
<TextBox className="p-Home TextBox276 bpt" {...TextBox276Props} {...TextBox276Cb} {...TextBox276IoProps}/>
<TextBox className="p-Home TextBox277 bpt" {...TextBox277Props} {...TextBox277Cb} {...TextBox277IoProps}/>
</Div>
<Flex className="p-Home Flex260 bpt" {...Flex260Props} {...Flex260Cb} {...Flex260IoProps}>
<Button className="p-Home Button12 bpt" {...Button12Props} {...Button12Cb} {...Button12IoProps}/>
<Button className="p-Home Button16 bpt" {...Button16Props} {...Button16Cb} {...Button16IoProps}/>
</Flex>
</Flex>
</Div>
</Flex>
</Flex>
<Flex className="p-Home FAQ bpt" {...FAQProps} {...FAQCb} {...FAQIoProps}>
<Flex className="p-Home FQ_Top bpt" {...FQ_TopProps} {...FQ_TopCb} {...FQ_TopIoProps}>
<TextBox className="p-Home faq_text bpt" {...faq_textProps} {...faq_textCb} {...faq_textIoProps}/>
<TextBox className="p-Home TextBox280 bpt" {...TextBox280Props} {...TextBox280Cb} {...TextBox280IoProps}/>
</Flex>
<Flex className="p-Home FAQ_bottom bpt" {...FAQ_bottomProps} {...FAQ_bottomCb} {...FAQ_bottomIoProps}>
<Flex className="p-Home Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<Flex className="p-Home Flex266 bpt" {...Flex266Props} {...Flex266Cb} {...Flex266IoProps}>
<TextBox className="p-Home TextBox295 bpt" {...TextBox295Props} {...TextBox295Cb} {...TextBox295IoProps}/>
<TextBox className="p-Home TextBox294 bpt" {...TextBox294Props} {...TextBox294Cb} {...TextBox294IoProps}/>
<TextBox className="p-Home TextBox293 bpt" {...TextBox293Props} {...TextBox293Cb} {...TextBox293IoProps}/>
</Flex>
<Flex className="p-Home Flex267 bpt" {...Flex267Props} {...Flex267Cb} {...Flex267IoProps}>
<TextBox className="p-Home TextBox298 bpt" {...TextBox298Props} {...TextBox298Cb} {...TextBox298IoProps}/>
<TextBox className="p-Home TextBox297 bpt" {...TextBox297Props} {...TextBox297Cb} {...TextBox297IoProps}/>
<TextBox className="p-Home TextBox296 bpt" {...TextBox296Props} {...TextBox296Cb} {...TextBox296IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex278 bpt" {...Flex278Props} {...Flex278Cb} {...Flex278IoProps}>
<Flex className="p-Home Flex277 bpt" {...Flex277Props} {...Flex277Cb} {...Flex277IoProps}>
<TextBox className="p-Home TextBox321 bpt" {...TextBox321Props} {...TextBox321Cb} {...TextBox321IoProps}/>
<TextBox className="p-Home TextBox322 bpt" {...TextBox322Props} {...TextBox322Cb} {...TextBox322IoProps}/>
<TextBox className="p-Home TextBox320 bpt" {...TextBox320Props} {...TextBox320Cb} {...TextBox320IoProps}/>
</Flex>
<Flex className="p-Home Flex276 bpt" {...Flex276Props} {...Flex276Cb} {...Flex276IoProps}>
<TextBox className="p-Home TextBox317 bpt" {...TextBox317Props} {...TextBox317Cb} {...TextBox317IoProps}/>
<TextBox className="p-Home TextBox318 bpt" {...TextBox318Props} {...TextBox318Cb} {...TextBox318IoProps}/>
<TextBox className="p-Home TextBox319 bpt" {...TextBox319Props} {...TextBox319Cb} {...TextBox319IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Contact_Wrapper bpt" {...Contact_WrapperProps} {...Contact_WrapperCb} {...Contact_WrapperIoProps}>
<Flex className="p-Home Contact bpt" {...ContactProps} {...ContactCb} {...ContactIoProps}>
<Flex className="p-Home Contac_top bpt" {...Contac_topProps} {...Contac_topCb} {...Contac_topIoProps}>
<TextBox className="p-Home contact_text bpt" {...contact_textProps} {...contact_textCb} {...contact_textIoProps}/>
<TextBox className="p-Home TextBox327 bpt" {...TextBox327Props} {...TextBox327Cb} {...TextBox327IoProps}/>
</Flex>
<Flex className="p-Home Contact_bottom bpt" {...Contact_bottomProps} {...Contact_bottomCb} {...Contact_bottomIoProps}>
<Flex className="p-Home Contact_bottom_left bpt" {...Contact_bottom_leftProps} {...Contact_bottom_leftCb} {...Contact_bottom_leftIoProps}>
<TextBox className="p-Home TextBox359 bpt" {...TextBox359Props} {...TextBox359Cb} {...TextBox359IoProps}/>
<TextBox className="p-Home TextBox330 bpt" {...TextBox330Props} {...TextBox330Cb} {...TextBox330IoProps}/>
<TextBox className="p-Home TextBox331 bpt" {...TextBox331Props} {...TextBox331Cb} {...TextBox331IoProps}/>
</Flex>
<Flex className="p-Home Contact_bottom_right bpt" {...Contact_bottom_rightProps} {...Contact_bottom_rightCb} {...Contact_bottom_rightIoProps}>
<Flex className="p-Home Flex74 bpt" {...Flex74Props} {...Flex74Cb} {...Flex74IoProps}>
<TextBox className="p-Home TextBox78 bpt" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
<TextBox className="p-Home TextBox342 bpt" {...TextBox342Props} {...TextBox342Cb} {...TextBox342IoProps}/>
<TextBox className="p-Home TextBox343 bpt" {...TextBox343Props} {...TextBox343Cb} {...TextBox343IoProps}/>
</Flex>
<Flex className="p-Home Flex285 bpt" {...Flex285Props} {...Flex285Cb} {...Flex285IoProps}>
<TextBox className="p-Home TextBox362 bpt" {...TextBox362Props} {...TextBox362Cb} {...TextBox362IoProps}/>
<TextBox className="p-Home TextBox361 bpt" {...TextBox361Props} {...TextBox361Cb} {...TextBox361IoProps}/>
<TextBox className="p-Home TextBox360 bpt" {...TextBox360Props} {...TextBox360Cb} {...TextBox360IoProps}/>
</Flex>
<Flex className="p-Home Flex286 bpt" {...Flex286Props} {...Flex286Cb} {...Flex286IoProps}>
<TextBox className="p-Home TextBox365 bpt" {...TextBox365Props} {...TextBox365Cb} {...TextBox365IoProps}/>
<TextBox className="p-Home TextBox364 bpt" {...TextBox364Props} {...TextBox364Cb} {...TextBox364IoProps}/>
<TextBox className="p-Home TextBox363 bpt" {...TextBox363Props} {...TextBox363Cb} {...TextBox363IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home All_right_wrapper bpt" {...All_right_wrapperProps} {...All_right_wrapperCb} {...All_right_wrapperIoProps}>
<Flex className="p-Home All_right bpt" {...All_rightProps} {...All_rightCb} {...All_rightIoProps}>
<Flex className="p-Home Flex293 bpt" {...Flex293Props} {...Flex293Cb} {...Flex293IoProps}>
<TextBox className="p-Home TextBox375 bpt" {...TextBox375Props} {...TextBox375Cb} {...TextBox375IoProps}/>
<TextBox className="p-Home TextBox376 bpt" {...TextBox376Props} {...TextBox376Cb} {...TextBox376IoProps}/>
<TextBox className="p-Home TextBox377 bpt" {...TextBox377Props} {...TextBox377Cb} {...TextBox377IoProps}/>
<TextBox className="p-Home TextBox378 bpt" {...TextBox378Props} {...TextBox378Cb} {...TextBox378IoProps}/>
<TextBox className="p-Home TextBox379 bpt" {...TextBox379Props} {...TextBox379Cb} {...TextBox379IoProps}/>
<TextBox className="p-Home TextBox380 bpt" {...TextBox380Props} {...TextBox380Cb} {...TextBox380IoProps}/>
<TextBox className="p-Home TextBox381 bpt" {...TextBox381Props} {...TextBox381Cb} {...TextBox381IoProps}/>
<TextBox className="p-Home TextBox383 bpt" {...TextBox383Props} {...TextBox383Cb} {...TextBox383IoProps}/>
</Flex>
</Flex>
</Flex>
  </>);
}
