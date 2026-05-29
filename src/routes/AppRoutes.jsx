
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import FAQ from '../pages/FAQ'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import BlogDetails from '../pages/BlogDetails'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog/:slug" element={<BlogDetails />} />
      </Route>
    </Routes>
  )
}
