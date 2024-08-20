"use client";
import Dashboard from "./components/dashboard";
import AboutHouse from "./components/aboutHouse";
import AboutCompany from "./components/aboutCompany";
import ResidenceCards from "./components/residenceCards";
import ReviewCards from "./components/reviewCards";
import QuestionSection from "./components/questionSection";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <Dashboard />
      <AboutHouse />
      <AboutCompany />
      <ResidenceCards />
      <ReviewCards />
      <QuestionSection />
      <Footer />
    </>
  );
}
