"use client";
import React from "react";
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Globe, Flag, AlertCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Hikari Tourism Office"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
            We're here to help you plan your perfect Hikari Island experience
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-8">
              Have questions about visiting Hikari? Our tourism experts are ready to assist you with planning your trip,
              providing information, or answering any questions you may have.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="Enter your email address" />
              </div>

              <div className="space-y-2">
                <label htmlFor="inquiry" className="text-sm font-medium">
                  Type of Inquiry
                </label>
                <Select>
                  <SelectTrigger id="inquiry">
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Information</SelectItem>
                    <SelectItem value="booking">Booking Assistance</SelectItem>
                    <SelectItem value="transportation">Transportation</SelectItem>
                    <SelectItem value="accommodation">Accommodation</SelectItem>
                    <SelectItem value="attractions">Attractions & Activities</SelectItem>
                    <SelectItem value="embassy">Embassy/Consulate Services</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Please provide details about your inquiry" rows={5} />
              </div>

              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Tourism Office</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-700">
                      Hikari Tourism Office<br />
                      1-1 Sakura Street, Togetsu<br />
                      Hikari Island, Japan Sea
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-700">+81-123-456-789</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-700">info@hikari-tourism.jp</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Office Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] w-full rounded-lg overflow-hidden mb-6">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Map of Hikari Tourism Office location"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 p-4 rounded-lg">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                <p className="text-sm text-gray-700">
                  For emergencies requiring immediate assistance, please contact our 24/7 Tourist Helpline at +81-123-789-456.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Embassy & Consulate Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Embassy & Consulate Services</h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            Hikari Island hosts several embassies and consulates to assist international visitors. These diplomatic missions
            provide various services including visa assistance, passport services, and emergency support for their citizens.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Embassy Building Image */}
            <div className="lg:col-span-1">
              <div className="relative h-full min-h-[400px] w-full rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Hikari International Embassy Complex"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Embassy Information */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Globe className="h-5 w-5 text-emerald-600 mr-2" />
                  Hikari International Embassy Complex
                </h3>
                <p className="text-gray-700 mb-4">
                  The Hikari International Embassy Complex houses diplomatic missions from several countries in one convenient location.
                  The complex is located in the Diplomatic Quarter of Togetsu, just 15 minutes from the city center.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-gray-700">
                        8-10 Diplomatic Avenue<br />
                        Togetsu, Hikari Island
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">Main Complex Phone</h4>
                      <p className="text-gray-700">+81-123-555-000</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">General Hours</h4>
                      <p className="text-gray-700">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        (Individual embassy hours may vary)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3">
                    <Flag className="h-5 w-5 text-emerald-600 mr-2" />
                    <h4 className="font-bold">Japanese Consulate</h4>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">
                    Provides visa services, passport assistance, and official documentation for Japanese citizens and visitors.
                  </p>
                  <p className="text-sm text-gray-500">
                    Phone: +81-123-555-100<br />
                    Email: japan-consulate@hikari.jp
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3">
                    <Flag className="h-5 w-5 text-emerald-600 mr-2" />
                    <h4 className="font-bold">United States Embassy</h4>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">
                    Services for U.S. citizens including passport renewal, notarial services, and emergency assistance.
                  </p>
                  <p className="text-sm text-gray-500">
                    Phone: +81-123-555-200<br />
                    Email: us-embassy@hikari.jp
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3">
                    <Flag className="h-5 w-5 text-emerald-600 mr-2" />
                    <h4 className="font-bold">European Union Delegation</h4>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">
                    Represents EU interests and provides consular support for citizens of EU member states.
                  </p>
                  <p className="text-sm text-gray-500">
                    Phone: +81-123-555-300<br />
                    Email: eu-delegation@hikari.jp
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3">
                    <Flag className="h-5 w-5 text-emerald-600 mr-2" />
                    <h4 className="font-bold">International Services Office</h4>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">
                    Assistance for visitors from countries without dedicated embassies on Hikari Island.
                  </p>
                  <p className="text-sm text-gray-500">
                    Phone: +81-123-555-400<br />
                    Email: international@hikari.jp
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Embassy Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-2">Passport & Documentation</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                  <li>Passport renewal and replacement</li>
                  <li>Emergency travel documents</li>
                  <li>Document authentication</li>
                  <li>Birth/marriage registration</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-2">Consular Assistance</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                  <li>Emergency assistance</li>
                  <li>Legal advice and support</li>
                  <li>Medical emergency coordination</li>
                  <li>Lost property assistance</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-2">Visa Services</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                  <li>Visa application processing</li>
                  <li>Visa extension assistance</li>
                  <li>Work and residence permits</li>
                  <li>Entry requirement information</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Emergency Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-red-600">Emergency Services</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="font-medium">Emergency Hotline:</span>
                  <span>110</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Ambulance/Medical:</span>
                  <span>119</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Fire Department:</span>
                  <span>119</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Coast Guard:</span>
                  <span>118</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Tourist Police</h3>
              <p className="text-gray-700 mb-3">
                Specialized police service for tourists, with English-speaking officers.
              </p>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="font-medium">Hotline:</span>
                  <span>+81-123-456-111</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Togetsu Office:</span>
                  <span>+81-123-456-222</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Medical Services</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="font-medium">Togetsu General Hospital:</span>
                  <span>+81-123-789-000</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">International Medical Center:</span>
                  <span>+81-123-789-100</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">24/7 Pharmacy Hotline:</span>
                  <span>+81-123-789-200</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">We Look Forward to Welcoming You to Hikari</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Our team is dedicated to ensuring you have a memorable and enjoyable experience on our beautiful island.
          </p>
          <Link
            href="/plan"
            className="bg-emerald-600 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-700 transition"
          >
            Start Planning Your Visit
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="

