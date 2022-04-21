import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/fundraisings',
        name: 'TogetherDonation',
        component: () => import('@/components/TogetherDonation'), // 동적 import
        children: [
            {
                path: 'now',
                name: 'DonationIng',
                component: () => import('@/components/DonationIng'),
            },
            {
                path: 'epilogue',
                name: 'DonationAfter',
                component: () => import ('@/components/DonationAfter'),
            }
                    ]

    },
    {
        path: '/fundraisings/:id',
        name: 'DonationIngDetail',
        component: () => import('@/components/DonationIngDetail'), // 동적 import

    }

];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});