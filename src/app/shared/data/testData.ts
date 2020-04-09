import { Question } from "../types/question";
import { Product } from '../types/Product';

export const testQuestions: Question[] = [
    {
        label: "Customer age?",
        key: "age",
        options: [
            {label: "0-17", value: "0-17"},
            {label: "18-64", value: "18-64"},
            {label: "65+", value: "65+"}
        ]
    },
    {
        label: "Is customer a student?",
        key: "student",
        options: [
            {label: "Yes, I am", value: "true"},
            {label: "No, I am not", value: "false"}
        ]
    },
    {
        label: "What is customer income?",
        key: "income",
        options: [
            {label: "0", value: "0"},
            {label: "1-12000", value: "1-12000"},
            {label: "12001-40000", value: "12001-40000"},
            {label: "40001+", value: "40001+"}
        ]
    }
];

export const testProducts: Product[] = [
    {
        name: "Current Account",
        rules: [
            { key: "income", allowed: ["1-12000", "12001-40000", "40001+"]},
            { key: "age", allowed: ["18-64", "65+"]},
        ]
    },
    {
        name: "Current Account Plus",
        rules: [
            { key: "income", allowed: ["40001+"]},
            { key: "age", allowed: ["18-64", "65+"]},
        ]
    },
    {
        name: "Junior Saver Account",
        rules: [
            { key: "age", allowed: ["0-17"]},
        ]
    },
    {
        name: "Student Account",
        rules: [
            { key: "age", allowed: ["18-64"]},
            { key: "student", allowed: ["true"]}
        ]
    },
    {
        name: "Senior Account",
        rules: [
            { key: "age", allowed: ["65+"]}
        ]
    },
    {
        name: "Debit Card",
        rules: [
            { key: "income", allowed: ["1-12000"]},
            { key: "age", allowed: ["18-64", "65+"]},
        ]
    },
    {
        name: "Credit Card",
        rules: [
            { key: "income", allowed: ["12001-40000", "40001+"]},
            { key: "age", allowed: ["18-64", "65+"]}
        ]
    },
    {
        name: "Gold Credit Card",
        rules: [
            { key: "income", allowed: ["40001+"]},
            { key: "age", allowed: ["18-64", "65+"]},
        ]
    }
];
