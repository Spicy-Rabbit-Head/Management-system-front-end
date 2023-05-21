/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    prefix: 'tw-',
    theme: {
        // 扩展
        extend: {
            // 过渡持续时间
            transitionDuration: {
                '1250': '1250ms'
            },
            // 颜色
            colors: {
                // 登录界面背景
                'login-bg': '#e6efeb',
                // 登录界面按钮背景
                'login-btn': '#f9f9f9',
            },
            // 缩放比率
            scale: {
                '20': '.2',
                '50': '.5',
                '60': '.6',
                '70': '.7',
                '80': '.8',
                '90': '.9',
                '225': '2.25',
            },
            // 盒子阴影
            boxShadow: {
                // 登录界面输入框阴影
                'login-in-shadow': 'inset 2px 2px 4px #d1d9e6,inset -2px -2px 4px #f9f9f9'
            },
            // 宽
            width: {
                // 登录界面主框宽
                '1000': '1000px',
                '300': '300px',
            },
            // 最小宽度
            minWidth: {
                // 登录界面主框宽
                '1000': '1000px',
                '300': '300px',
            },
            // 高
            height: {
                // 登录界面主框高
                '600': '600px',
                '560': '560px',
                '520': '520px'
            },
            // 最小高度
            minHeight: {
                // 登录界面主框高
                '600': '600px',
                '560': '560px',
                '520': '520px'
            },
            // 插入距离
            inset: {
                '2/5': '40%',
                '3/5': '60%',
            },
            // 媒体查询
            screens: {
                'xs': '370px',
            },
            // 关键帧
            keyframes: {
                textAnimation: {
                    '0%,10%,100%': {width: '0'},
                    '70%,90%': {width: '100%'},
                }
            },
            // 动画
            animation: {
                'text-animation-effects': 'textAnimation 6s linear infinite',
            },
            // 背景渐变
            backgroundImage: {
                'login-typing-bg': 'linear-gradient(to right, #ec008c , #fc6767);',
            }
        }
    },
    plugins: [require("daisyui")],
    corePlugins: {
        preflight: false,
    }
}
