"use client"

import { useState } from "react"
import IdiomGrid from "@/components/idiom-grid"
import CategoryFilter from "@/components/category-filter"
import { idioms, categories } from "@/data/idioms"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-6">Happy Mother's Day!</h1>
      <p className="text-xl text-primary mb-8">
        Thank you for all of the wisdom you have given me 😊. Click on any card to expand and learn more about the chengyu.
      </p>

      <CategoryFilter categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      <IdiomGrid idioms={idioms} activeCategory={activeCategory} />
    </main>
  )
}
