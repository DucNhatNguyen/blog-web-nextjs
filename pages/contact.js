import Layout from "../components/layout";
import { useState, useEffect } from "react";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Button, Form, Input } from "antd";
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
              <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                <MapPinIcon className="w-4 h-4" />
                <span>1734 Sanfransico, CA 93063</span>
              </div>
              {true && (
                <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                  <EnvelopeIcon className="w-4 h-4" />
                  <a href={`mailto:${"ducnhat090199@gmail.com"}`}>
                    {"ducnhat090199@gmail.com"}
                  </a>
                </div>
              )}
              {true && (
                <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                  <PhoneIcon className="w-4 h-4" />
                  <a href={`tel:${"012345678"}`}>012345678</a>
                </div>
              )}
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
