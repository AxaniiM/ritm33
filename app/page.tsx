'use client'
import DevelopmentIcon from "@/public/icons/DevelopmentIcon";
import MobileDevelopment from "@/public/icons/MobileDevelopment";
import PersonnelIcon from "@/public/icons/PersonnelIcon";
import UxDesign from "@/public/icons/UxDesign";
import WebDevelopment from "@/public/icons/WebDevelopment";
import CoworkersImage from "@/public/images/CoworkersImage";
import DevOps from "@/public/icons/DevOps";
import TestingIcon from "@/public/icons/TestingIcon";
import FreeConsultIcon from "@/public/icons/FreeConsultIcon";
import Navigation from "./components/NavBar";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Divider, Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from 'yup'

export default function Home() {

  const initialValues = {
    fullName: '',
    company: '',
    email: '',
    phone: '',
    description: ''
  }

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required('Обязательное поле'),
    company: Yup.string()
      .required('Обязательное поле'),
    phone: Yup.string()
      .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Должны быть только цифры')
      .required('Обязательное поле'),
    email: Yup.string()
      .email('Неверный email')
      .required('Обязательное поле'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const req = await axios.post(`https://api.ritm33.md/api/contact`, values);
        if (req.status === 200) {
          console.log('Email entered successfully!');
        } else {
          console.error('Failed to submit login data, check if it exists', req.statusText);
        }
      } catch (error) {
        console.error("Something went wrong", error)
      } finally {
        resetForm()
      }
    }
  })

  return (
    <main className="flex flex-col gap-12 w-screen">
      <Navigation />
      <div className="bg-white flex flex-col items-center gap-20 mx-[2.5%]">
        <section id="aboutUs" className="lg:w-[936px]">
          <div className="flex flex-col items-center gap-6">
            <h1 className=" text-center lg:text-[50px] text-[36px] leading-[40px] lg:leading-[56px]">
              В ритме разрабатываем <br />приложения.<br />
              <span>В ритме твоих потребностей.</span>
            </h1>
            <p className="text-xl text-center lg:w-[744px]">Ритм33 – студия разработки веб и мобильных приложений, где<br /> инновации и результаты движутся в... Ритме.</p>
            <Link href='#services' className="text-[#3262D1] flex flex-row items-center justify-center gap-2">
              Услуги
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.46 0.5L11.21 4.25V5.3L7.46 9.05L6.395 8L8.855 5.525H0.5V4.025H8.855L6.38 1.55L7.46 0.5Z" fill="#3262D1" />
              </svg>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-4 mt-4 xl:mt-0">
            <CoworkersImage />
            <h2 className="text-[36px] lg:text-[40px] leading-[40px] lg:leading-[46px] mt-4 xl:mt-0">А мы, собственно, кто?</h2>
            <p className="text-center lg:w-[743px]">
              Мы – команда опытных и увлеченных разработчиков, которые способны помочь вам создать кастомные веб и мобайл приложения, решения для анализа данных и многое другое.
              <br />
              <br className="hidden lg:flex" />
              Независимо от того, нужен ли вам проект с полным комплексом услуг или выделенная команда, мы готовы стать вашим партнером и предоставить превосходные результаты.
            </p>
          </div>
        </section>
        <section id="services" className="flex flex-col gap-6">
          <h1 className="text-[40px] leading-[46px] text-center ">Услуги</h1>
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="bg-[#f6f5f4] lg:w-[312px]  lg:h-[368px] rounded-2xl p-6">
              <DevelopmentIcon />
              <h3 className="text-2xl leading-[30px] my-2 font-semibold">Разработка <br className="hidden lg:block" />продукта</h3>
              <p className="text-base xl:w-[224px]">От идеи до запуска - мы занимаемся всеми аспектами разработки продукта. Наши проектные менеджеры обеспечивают своевременную доставку и соблюдение стандартов качества.</p>
            </div>
            <div className="bg-[#f6f5f4] lg:w-[312px]  lg:h-[368px] rounded-2xl p-6">
              <PersonnelIcon />
              <h3 className="text-2xl leading-[30px] my-2 font-semibold">Предоставление <br className="hidden lg:block" />персонала </h3>
              <p className="text-base xl:w-[224px]">Нужны дополнительные руки для вашего проекта? Мы предлагаем agile-команды, которые могут присоединиться на любом этапе. Наши инженеры квалифицированы и легко адаптируются.</p>
            </div>
            <div className="bg-[#f6f5f4] lg:w-[312px]  lg:h-[368px] rounded-2xl p-6">
              <WebDevelopment />
              <h3 className="text-2xl leading-[30px] mt-2 mb-6 font-semibold">Веб-разработка</h3>
              <p className="text-base xl:w-[224px]">Мы создаем потрясающие веб-сайты, которые работают на любом устройстве и просты в управлении. Мы превратим ваш сайт из идеи в реальность в кратчайшие сроки и по разумной цене.</p>
            </div>
            <div className="bg-[#f6f5f4] lg:w-[312px]  lg:h-[368px] rounded-2xl p-6">
              <MobileDevelopment />
              <h3 className="text-2xl leading-[30px] mt-2 mb-6 font-semibold">Мобильная разработка</h3>
              <p className="text-base xl:w-[224px]">Мы сделаем ваше приложение выделятся из толпы. Мы разрабатываем интуитивно понятные и быстрые приложения, которые масштабируются и работают без сбоев на iOS,  и на Android.</p>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="bg-[#f6f5f4] lg:w-[312px]  lg:h-[368px] rounded-2xl p-6">
              <UxDesign />
              <h3 className="text-2xl leading-[30px] my-2 font-semibold">UX/UI дизайн</h3>
              <p className="text-base xl:w-[224px]">Мы создаем пользовательские интерфейсы, которые восхищают. Вашим клиентам будет приятно пользоваться вашими услугами, продуктами и предложениями.</p>
            </div>
            <div className="bg-[#f6f5f4] lg:w-[312px]  lg:h-[368px] rounded-2xl p-6">
              <DevOps />
              <h3 className="text-2xl leading-[30px] my-2 font-semibold">DevOps</h3>
              <p className="text-base xl:w-[224px]">Мы любим DevOps - от инфраструктуры до безопасности и операций. Мы помогаем вам создавать инструменты, которые оптимизируют и автоматизируют ваши процессы.</p>
            </div>
            <div className="bg-[#f6f5f4] lg:w-[312px]  lg:h-[368px] rounded-2xl p-6">
              <TestingIcon />
              <h3 className="text-2xl leading-[30px] my-2 font-semibold">Тестирование и <br className="hidden lg:block" />QA</h3>
              <p className="text-base xl:w-[224px]">Мы обеспечиваем качество ваших веб-сайтов и мобильных приложений. Мы повышаем качество кода для компаний по всему миру. Мы охватываем все виды тестирования.</p>
            </div>
            <div className="bg-white border lg:w-[312px] lg:h-[368px] rounded-2xl p-6">
              <FreeConsultIcon />
              <h3 className="text-2xl leading-[30px] my-2 font-semibold">Бесплатная консультация – в студию</h3>
              <p className="text-base xl:w-[224px] mb-4">Свяжитесь с нами сегодня и получите бесплатную консультацию от наших экспертов.</p>
              <Link href="#contact" className="bg-black hover:bg-white text-white border-2 border-transparent hover:border-black  hover:text-black leading-6 rounded-full p-2 w-[120px]">Контакт</Link>
            </div>
          </div>
        </section>
        <section id="techStack" className="flex flex-col gap-8">
          <h1 className="text-[40px] leading-[46px] text-center font-bold">Технологии</h1>
          <div className="flex flex-col lg:flex-row gap-6 ">
            <div className="flex flex-col justify-between gap-2 pl-8 bg-[#f6f5f4] w-[360px] lg:w-[312px] h-[230px] lg:h-[327px] rounded-2xl">
              <h3 className="text-xl font-semibold pt-4">Frontend</h3>
              <div className="flex flex-col gap-2 bg-white pl-2 lg:ml-4  rounded-tl-2xl rounded-br-2xl py-2 w-[324px] lg:w-[260px] mb-1">
                <div className="flex flex-row gap-1 lg:gap-2 lg:flex-col">
                  <span className="bg-[#EBEBEB] font-bold w-fit px-2 text-center text-[32px] h-[48px]">React</span>
                  <span className="bg-[#FCE9E7] text-[#EA4E44] font-bold w-fit px-2 text-center text-[32px] h-[48px]">Angular</span>

                </div>
                <span className="bg-[#FEF6D6] text-[#F5A201] font-bold w-fit px-2 text-center text-[32px] h-[48px]">Typescript</span>
                <span className="bg-[#EBEBEB] font-bold w-[120px] text-center text-[32px] h-[48px]">Vue.js</span>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-2 pl-8 bg-[#f6f5f4] w-[360px] lg:w-[312px] h-[286px] lg:h-[327px] rounded-2xl">
              <h3 className="text-xl font-semibold pt-4">Backend</h3>
              <div className="flex flex-col gap-2 bg-white pl-2 py-2 rounded-tl-2xl rounded-br-2xl lg:ml-4  lg:w-[260px] mr-1 lg:mr-0 mb-1">
                <div className="flex flex-row gap-1">
                  <span className="bg-[#EBEBEB] font-bold w-fit px-2 text-center text-[32px] h-[48px]">Node.js</span>
                  <span className="bg-[#EBEBEB] font-bold text-center text-[32px] h-[48px] px-2 w-fit">PHP</span>
                </div>
                <span className="bg-[#E3ECF3] text-[#0A84CF] font-bold w-fit px-2 text-center text-[32px] h-[48px]">Python</span>
                <span className="bg-[#EBEBEB] font-bold text-center w-fit text-[32px] h-[48px] mr-1">Ruby on Rails</span>
                <div className="flex flex-row gap-1">
                  <span className="bg-[#FCE9E7] text-[#EA4E44] font-bold w-fit text-center text-[32px] h-[48px] px-2">.NET</span>
                  <span className="bg-[#E2F2F1] text-[#289D99] font-bold w-fit text-center text-[32px] h-[48px] px-2">Java</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-2 pl-8 bg-[#f6f5f4] w-[360px] lg:w-[312px] h-[315px] lg:h-[327px] rounded-2xl">
              <h3 className="text-xl font-semibold pt-4">Мобильные приложения
                (iOS, Android)</h3>
              <div className="flex flex-col gap-2 bg-white lg:ml-4  pl-2 rounded-tl-2xl rounded-br-2xl py-2 lg:w-[260px] mr-1 lg:mr-0 mb-1">
                <span className="bg-[#EBEBEB] font-bold w-fit px-2 text-center text-[32px] h-[48px]">Flutter</span>
                <span className="bg-[#FEF6D6] text-[#F5A201] font-bold text-center text-[32px] h-[48px] px-2 w-fit">Kotlin</span>
                <span className="bg-[#E2F2F1] text-[#289D99] font-bold w-fit text-center text-[32px] h-[48px] px-2">React Native</span>
                <div className="flex flex-row gap-1">
                  <span className="bg-[#EBEBEB] font-bold text-center text-[32px] h-[48px] px-2 w-fit">Swift</span>
                  <span className="bg-[#EBEBEB] font-bold text-center text-[32px] h-[48px] px-2 w-fit">Ionic</span>

                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-2 pl-8 bg-[#f6f5f4] w-[360px] lg:w-[312px] h-[286px] lg:h-[327px] rounded-2xl">
              <h3 className="text-xl font-semibold pt-4">DevOps</h3>
              <div className="flex flex-col gap-2 bg-white mr-1 lg:mr-0 lg:ml-4 pl-2 rounded-tl-2xl rounded-br-2xl py-2 lg:w-[260px] mb-1">
                <span className="bg-[#EBEBEB] font-bold w-fit px-2 text-center text-[32px] h-[48px]">Docker</span>
                <span className="bg-[#E2F2F1] text-[#289D99] font-bold w-fit text-center text-[32px] h-[48px] px-2">AWS</span>
                <span className="bg-[#FCE9E7] text-[#EA4E44] font-bold w-fit text-[32px] h-[48px] px-2">Google Cloud</span>
                <span className="bg-[#EBEBEB] font-bold text-center text-[32px] h-[48px] px-2 w-fit">Kubernetes</span>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="lg:w-[936px] flex flex-col items-center">
          <div className="flex flex-col gap-6 lg:w-[744px]">
            <h1 className="font-bold text-[40px] text-center">Воплотим ваш проект в жизнь?</h1>
            <p className="text-[20px] leading-[26px] text-center font-medium">Мы с удовольствием узнаем больше о вашей компании и о том, как мы можем вам помочь. Расскажите нам о своем проекте в форме ниже. Если вы предпочитаете написать нам по электронной почте, напишите на <u>business@ritm33.io.</u></p>
          </div>
          <form className="flex flex-col gap-4 mt-6 w-[400px]" onSubmit={formik.handleSubmit}>
              <Input
                label="Ваше имя*"
                id="fullName"
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
             onBlur={formik.handleBlur}
                errorMessage={formik.errors.fullName}
              />
              <Input
                label="Название компании*"
                id="company"
                name="company"
                value={formik.values.company}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errorMessage={formik.errors.company}
              />
              <Input
                label="Телефон*"
                id="phone"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errorMessage={formik.errors.phone}
              />
              <Input
                label="Email*"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errorMessage={formik.errors.email}
              />
              <Textarea
                label="Описание проекта"
                id="description"
                name="description"
                onBlur={formik.handleBlur}
                value={formik.values.description}
                onChange={formik.handleChange}
              />
              <Button type="submit" className="w-[120px] bg-black text-white rounded-full">Отправить</Button>
            </form>
        </section>
      </div>
      <footer className="font-medium text-base flex flex-col gap-4 mb-8 max-w-[1128px] mx-[2.5%] xl:mx-auto">
        <Divider />
        <div className="flex flex-col xl:flex-row items-center justify-between w-[328px] xl:w-[1128px] self-center">
          <span>+7(347)256-70-99 </span>
          <span className="text-[#999999] text-center">© 2024 ОАО “Ритм33”</span>
          <span>office@ritm33.io</span>
        </div>
      </footer>
    </main>
  );
}
