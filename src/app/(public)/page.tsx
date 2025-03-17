import Hero from "@/components/layout/DefaultLaout/hero";
import OtherCourses from "@/components/layout/DefaultLaout/other-courses";
import WhyChooseUs from "@/components/layout/DefaultLaout/why-choose-us";
import OnlineCourse from "@/components/online-services";
import ProductsSection from "@/components/section/product-sections";
import ServicesSection from "@/components/section/service-section";

export default function Home() {
  return (
    <div>
      <Hero />
      <OnlineCourse />
      <WhyChooseUs />
      <ServicesSection />
      <ProductsSection />
      <OtherCourses />
    </div>
  );
}
