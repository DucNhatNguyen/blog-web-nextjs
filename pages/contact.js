import Layout from "../components/layout";
import { useState, useEffect } from "react";
//import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/outline";
import { Button, Form, Input } from "antd";
import Image from "next/image";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  return (
    <Layout>
      <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
        <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
          Contact
        </h1>
        <div className="text-center">
          <p className="text-lg">We are a here to help.</p>
        </div>

        <div className="grid my-10 md:grid-cols-2">
          <div className="my-10">
            <h2 className="text-2xl font-semibold dark:text-white">
              Contact Stablo
            </h2>
            <p className="max-w-sm mt-5">
              Have something to say? We are here to help. Fill up the form or
              send email or call phone.
            </p>

            <div className="mt-5">
              <div className="flex items-center mt-10 space-x-2 text-dark-600 dark:text-gray-400">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAACYklEQVR4nM3VUUhTURgH8D8GGZVRL5ZgQRFERfUgFOq5G0hlPVQQiBGB88USoqLAh4yg10SQCoIgCGL50EML6cGKoKEW0sMQg1a4oLJZLd3U3d1Vd/+4p93LVSc7mwpdOBzOued+v/Pdb/cM+J8u1mInNTRSw2nZC+xYnMANWEYNPgq8pwbmaGFqaCJQUhxQgzJq6JknOGc0gV4KrCsM8GIFBQbsIJmDq/m76xyN4GOmQn00Xgbk2Jp3QQM8hFJ1REOn/bDZso/6lwiTyeScpn8eodmy1w11qAIbKWDIDE5spf4j6gQdG5/i1cAn2b8ZmWB8cpr696/MNG6xEYNeVOZHPLhk78x42u0A4dE4PR3vWNE2JPvN7cOMRBPyntHrd9foQn5EICCzqC9jMhGXQfrDP7nr2lsJuNvz4di/TcQn3PV5pIIMylr49sgAk1PTPH77wxygom1Izlv3rXWmb7f9ygZVavJaIqe2O6/q7IOPMmjzvQjvBqOyt8bWvL3GPLnNzuSVSiZ+ubiulHrs2wyk69moHFu9G7F+HKxbbiP3VZBmu4jp7k4lJO2/7i58U37kAFZRQ0IW//Ba6uFQzm8kmW2pcIiZ+jV2PeKswsq8SDabW87XfnQ9jf4nOQGjr4eZI+XuLG4oARKpRrnclet8Mltr+OvOFaYf3pS9eaZ69hmWoBcblJFsNheVDkct2zw4XxAgEaCEAi8UT+Gg9bdQMCIhLyopEMuDjLMWm4oCHEjAS4HUPECaAvsXBDiQhmMU+DMLMCnQsCiAAwm0LrjQilB7ttCXlwRwQVVLChR7/QU4P9eJs+AuQgAAAABJRU5ErkJggg==" />
                <span>1734 Sanfransico, CA 93063</span>
              </div>
              <div className="flex items-center mt-10 space-x-2 text-dark-600 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#e0e0e0"
                    d="M5.5,40.5h37c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11v26C2,38.933,3.567,40.5,5.5,40.5z"
                  ></path>
                  <path
                    fill="#d9d9d9"
                    d="M26,40.5h16.5c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11L26,40.5z"
                  ></path>
                  <path
                    fill="#eee"
                    d="M6.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L6.745,40.5z"
                  ></path>
                  <path
                    fill="#e0e0e0"
                    d="M25.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L18.771,31.616L25.745,40.5z"
                  ></path>
                  <path
                    fill="#ca3737"
                    d="M42.5,9.5h-37C3.567,9.5,2,9.067,2,11v26c0,1.933,1.567,3.5,3.5,3.5H7V12h34v28.5h1.5c1.933,0,3.5-1.567,3.5-3.5V11C46,9.067,44.433,9.5,42.5,9.5z"
                  ></path>
                  <path
                    fill="#f5f5f5"
                    d="M42.5,7.5H24H5.5C3.567,7.5,2,9.036,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.036,44.433,7.5,42.5,7.5z"
                  ></path>
                  <path
                    fill="#e84f4b"
                    d="M43.246,7.582L24,21L4.754,7.582C3.18,7.919,2,9.297,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.297,44.82,7.919,43.246,7.582z"
                  ></path>
                </svg>
                <a href={`mailto:${"ducnhat090199@gmail.com"}`}>
                  {"ducnhat090199@gmail.com"}
                </a>
              </div>
              <div className="flex items-center mt-10 space-x-2 text-dark-600 dark:text-gray-400">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBklEQVR4nO2VMWvCUBRGD6QWzKKLhHawWru1YDM6dVGcLFQFO6jQuZTgP1DRoTjo4OaflQdfIIRkUN/bcuCRmxA47+bdewMFlmhoOWMGRFpzF4I34BeoAgEwcSHaAHeKmwnR0JagBKxSz3oSrWxJ2jk7NoIvm5msU8/GwNSWIGYBPCnuAz84oAz8K34G/nDEJzBQvARqrkSmlB+ACnACPBcSHzjqGkqaJRop26v7yPTHXs0ZKqNaavx8K75pMrSAgzKqaNeRqi4WdGyIAn26R92/qLyTfOi9KNECF+PrXEzl5dFVM9e5kQGwy/jXeJre5pysNewC2GqmrZXlKw64B9418wqwwhk6Sx6lRX9fCwAAAABJRU5ErkJggg==" />
                <a href={`tel:${"012345678"}`}>012345678</a>
              </div>
            </div>
          </div>
          <div>
            <Form
              className="my-10"
              name="basic"
              layout="vertical"
              autoComplete="off"
              onFinish={handleSubmit}
            >
              <div className="mb-5">
                <Form.Item
                  name="fullname"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập Họ và Tên",
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: "100%",
                    }}
                    placeholder="Full Name"
                    size="large"
                    className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  />
                </Form.Item>
              </div>

              <div className="mb-5">
                <Form.Item
                  name="email"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập Email",
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: "100%",
                    }}
                    placeholder="Email"
                    size="large"
                    className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  />
                </Form.Item>
              </div>

              <div className="mb-5">
                <Form.Item
                  name="comment"
                  noStyle
                  rules={[
                    { required: true, message: "Vui lòng nhập Nội dung" },
                    { type: "string", min: 3 },
                  ]}
                >
                  <Input.TextArea
                    maxLength={100}
                    placeholder="Nội dung"
                    rows={6}
                    className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  />
                </Form.Item>
              </div>

              <Form.Item>
                <Button
                  //type="primary"
                  htmlType="submit"
                  size="large"
                  style={{
                    height: "56px",
                  }}
                  className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black "
                >
                  {submitting ? (
                    <svg
                      className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

//export async function getStaticProps({ params }) {
//   const config = await getClient(preview).fetch(configQuery);
//   return {
//     props: {
//       siteconfig: { ...config },
//       preview,
//     },
//     revalidate: 100,
//   };
//}
