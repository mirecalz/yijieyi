import Vue from 'vue'
import Router from 'vue-router'
import App from './App'



import Hotel from '@/components/service/Hotel'
import GeRenZhongXin from '@/components/service/GeRenZhongXin'
import HunQingCeHua from '@/components/service/HunQingCeHua'
import Idea from '@/components/service/Idea'
import ShangCheng from '@/components/service/ShangCheng'
import ShangJiaZhongXin from '@/components/service/ShangJiaZhongXin'
import SheYin from '@/components/service/SheYin'
import ShouYe from '@/components/service/ShouYe'
import ZuoPinAnLi from '@/components/service/ZuoPinAnLi'

Vue.use(Router)

export const routes= [
{
  path: '/',
  name: 'ShouYe',
  component: ShouYe
},
{
  path: '/GeRenZhongXin',
  name: 'GeRenZhongXin',
  component: GeRenZhongXin
},
{
  path: '/Hotel',
  name: 'Hotel',
  component: Hotel
},
{
  path: '/HunQingCeHua',
  name: 'HunQingCeHua',
  component: HunQingCeHua
}, 
{
  path: '/Idea',
  name: 'Idea',
  component: Idea
},
{
  path: '/ShangCheng',
  name: 'ShangCheng',
  component: ShangCheng
},
{
  path: '/ShangJiaZhongXin',
  name: 'ShangJiaZhongXin',
  component: ShangJiaZhongXin
},
{
  path: '/SheYin',
  name: 'SheYin',
  component: SheYin
},
{
  path: '/ZuoPinAnLi',
  name: 'ZuoPinAnLi',
  component: ZuoPinAnLi
}
]
    
