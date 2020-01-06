import logo from "../images/logo_helio.png" // add school logo to images folder and import here

export const applicationsLive = true // set to false if not currently accepting applications
export const disabledLoanAppFormID = '69140c47-bb03-4a1b-b674-cc136fdea23d' // Hubspot ID for all disabled apply now lead captures
export const nextCohortStartDate = 'October 29, 2019'

// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = { // term details section
    interestRate36: '9.49%',
    interestRate60: '11.46%',
    APRRange36: '11.45 - 12.20%',
    APRRange60: '12.89 - 13.19%',
    interestOnly: [
        { // for multiple examples of interest only, add items to interestOnly array
            programName: 'the Full Stack Web Development Immersive & Unity Game Development Immersive programs',
            APR36: '11.67%',
            financeCharge36: '$2,402.62',
            IOPayment36: '$82.25',
            FullMonthlyPayment36: '$333.09',
            APR60: '12.99%',
            financeCharge60: '$4,207.46',
            IOPayment60: '$99.32',
            FullMonthlyPayment60: '$228.51',
            LoanExampleAmt: '$10,000',
            LoanExampleOFeeAmt: '$400',
            LoanExampleAmtPlusOFee: '$10,400',
            programLength: '3' // program length in months
        },
        { // for multiple examples of interest only, add items to interestOnly array
            programName: 'the After-Hours Career Changer program',
            APR36: '11.45%',
            financeCharge36: '$2,887.80',
            IOPayment36: '$89.65',
            FullMonthlyPayment36: '$363.07',
            APR60: '12.89%',
            financeCharge60: '$4,910.91',
            IOPayment60: '$108.26',
            FullMonthlyPayment60: '$249.08',
            LoanExampleAmt: '$11,000',
            LoanExampleOFeeAmt: '$440',
            LoanExampleAmtPlusOFee: '$11,440',
            programLength: '6' // program length in months
        }
    ],
    immediateRepayment: [
        { // for multiple examples of immmediate repayment, add items to immediateRepayment array
            programName: '',
            APR36: '12.20%',
            financeCharge36: '$1,224.70',
            FullMonthlyPayment36: '$204.85',
            APR60: '13.19%',
            financeCharge60: '$2,282.18',
            FullMonthlyPayment60: '$140.54',
            LoanExampleAmt: '$6,350',
            LoanExampleOFeeAmt: '$254',
            LoanExampleAmtPlusOFee: '$6,604'
        }
    ]
}

export const faq = { // faq section
    costOfLiving: true, // true if at least one program has cost of living included
    costOfLivingPrograms: 'Full Stack Web Development Immersive and Unity Game Development programs', // leave as empty string is cost of living availability is the same across all programs
    multCostOfLivingPrograms: true, // true if costOfLivingPrograms string has more than one program
    interestOnly: true, // true if interest-only payments are an option
    immediateRepayment: true, // true if immediate repayment is an option
    multipleLoanLengths: true, // true if 36 and 60 month options are both available
    multipleLoanTypes: true, // true if both IR and IO are available
    multiPrograms: true, // only true if there are multiple programs
    onlinePrograms: true, // true if at least one program is remote/online
    schoolHQState: 'UT',
    origFee: 0.04,

    // interest payment FAQ info
    exampleLoanAmount: '$10,000',
    interestRate36: '9.49%',
    interestRate60: '11.46%',
    APR36: '11.45 - 11.67%',
    APR60: '12.89 - 12.99%',
    IOPayment36: '$82.25',
    IOPayment60: '$99.32',

    // max loan amounts by program for faq1
    loanRange: [
        {
            programName: "the Full Stack Web Development Immersive program",
            maxAmount: "$12,450",
            col: true,
            colAmount: "$2,000"
        },
        {
            programName: "the Full Stack Web Development Advanced Online program",
            maxAmount: "$6,700",
            col: false,
            colAmount: "$6,000"
        },
        {
            programName: "the Full Stack Web Development Online program",
            maxAmount: "$5,150",
            col: false,
            colAmount: "$6,000"
        },
        {
            programName: "the Full Stack Web Development After-Hours program",
            maxAmount: "$6,850",
            col: false,
            colAmount: "$6,000"
        },
        {
            programName: "the UI/UX Design Part-Time program",
            maxAmount: "$6,150",
            col: false,
            colAmount: "$6,000"
        },
        {
            programName: "the After-Hours Career Changer program",
            maxAmount: "$12,500",
            col: false,
            colAmount: "$6,000"
        },
        {
            programName: "the Unity Game Development Immersive program",
            maxAmount: "$10,650",
            col: true,
            colAmount: "$2,000"
        },
    ]
}

// ***** END TERMS AND FAQ INFO ***** 

// ***** BEGIN GENERAL SCHOOL INFO ***** 

export const schoolLogo = logo // go to header.js if height needs adjustment

export const schoolName = "Helio Training"

export const schoolURL = 'https://heliotraining.com/' // update with url of school's website

export const skfURL = 'https://heliotraining.skills.fund/' // update with Skills Fund url

export const headline = "Learn to Code at Helio Training" // update headline as appropriate

export const leadContent = {
    header: "Your last step on the path toward changing your career",
    paragraph: `${schoolName} designs its programs to provide students a foundation for a career in web development, UI/UX design, or game development. ${schoolName} partners with Skills Fund to offer tuition${faq.costOfLiving ? ' and cost of living' : ''} financing so more students like you can access their program.`
}

export const threeStepCardText = {
    step1: "",
    step2: {
        header: "select your program",
        text: "Choose between the Full Stack Web Development Immersive, Full Stack Web Development Online/Advanced Online, Full Stack Web Development After-Hours, UI/UX Design Part-Time, After-Hours Career Changer, and Unity Game Development Immersive programs."
    },
    step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`
}

export const netlifyFormName = 'heliotraining_contact'

export const GATracking = 'UA-68312423-1'

export const hubspotFormId = "cc3874bb-20a2-4f74-b71e-a01624f5e884" // create Hubspot form, get form id after publishing

export const selectAProgram = "select_a_heliotraining_program" // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** END GENERAL SCHOOL INFO ***** 


// ***** BEGIN LOAN APP AND CALC INFO *****

export const defaultLoanAmount = 10000
export const placeholder = '$10,000'
export const interestRates = {
    ir36: 9.49,
    ir60: 11.46
}
export const moreThanSixPrograms = false // set to true if there are 7 or more programs in the loan application. True will render a dropdown menu, false will render buttons for each program.

export const programLoanInfo = [ // update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
    {
        name: "After-Hours Career Changer",
        url: "https://my.skills.fund/application?lenderCode=SKHELAHC18",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 12500,
            loanTerm36: true,
            loanTerm60: true,
            '0': { // interest-only 
                k: 8, 
                apr36: 11.45, 
                apr60: 12.89
            },
            '1': null // immediate repayment
        },
        defaultLoanType: "0", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
        showLoanTypes: false, // true if both IR and IO are available
        locations: ["Metro 1", "Metro 2", "Metro 3"],
        metros: [ // list in same order as locations array above
          {
            location: "Metro 1",
            loanInfo: { // // match loanInfo to Program 1 above
              maxLoanAmt: 12500,
              loanTerm36: true,
              loanTerm60: true,
              '0': { 
                  k: 8, 
                  apr36: 11.45, 
                  apr60: 12.89
              },
              '1': null
            }
          }
        ]
    },
    {
        name: "UI/UX Design",
        url: "https://my.skills.fund/application?lenderCode=SKHELIUX18",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 6150,
            loanTerm36: true,
            loanTerm60: true,
            '0': null,
            '1': {
              apr36: 12.20,
              apr60: 13.19
            }
        },
        defaultLoanType: "1", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false,
        showLoanTypes: false,
        locations: ["Metro 1", "Metro 2"],
        metros: [
            {
              location: "Metro 1",
              loanInfo: { // match loanInfo to Program 2 loanInfo above
                maxLoanAmt: 6150,
                loanTerm36: true,
                loanTerm60: true,
                '0': null,
                '1': {
                  apr36: 12.20,
                  apr60: 13.19
                }
              }
            }
          ]
    },
    {
        name: "Unity Game Development",
        url: "https://my.skills.fund/application?lenderCode=SKHELUGD19",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 12650,
            loanTerm36: true,
            loanTerm60: true,
            '0': { 
                k: 5, 
                apr36: 11.67, 
                apr60: 12.99
            },
            '1': null
        },
        defaultLoanType: "0", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false,
        showLoanTypes: false,
        locations: ["Metro A", "Metro B", "Metro C"],
        metros: [
            {
              location: "Metro A",
              loanInfo: { // match loanInfo to Program 3 loanInfo above
                maxLoanAmt: 12650,
                loanTerm36: true,
                loanTerm60: true,
                '0': { 
                    k: 5, 
                    apr36: 11.67, 
                    apr60: 12.99
                },
                '1': null
              }
            }
          ]
    },
    {
        name: "Web Development After-Hours",
        url: "https://my.skills.fund/application?lenderCode=SKHELIAH18",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 6850,
            loanTerm36: true,
            loanTerm60: true,
            '0': null,
            '1': {
              apr36: 12.20, 
              apr60: 13.19
          }
        },
        defaultLoanType: "1", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false,
        showLoanTypes: false,
        locations: ["Metro A", "Metro B", "Metro C"],
        metros: [
            {
              location: "Metro A",
              loanInfo: { // match loanInfo to Program 3 loanInfo above
                maxLoanAmt: 6850,
                loanTerm36: true,
                loanTerm60: true,
                '0': null,
                '1': {
                    apr36: 12.20, 
                    apr60: 13.19
                }
              }
            }
          ]
    },
    {
        name: "Web Development Immersive",
        url: "https://my.skills.fund/application?lenderCode=SKHELII18",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 14450,
            loanTerm36: true,
            loanTerm60: true,
            '0': { 
                k: 5, 
                apr36: 11.67, 
                apr60: 12.99
            },
            '1': null
        },
        defaultLoanType: "0", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false,
        showLoanTypes: false,
        locations: ["Metro A", "Metro B", "Metro C"],
        metros: [
            {
              location: "Metro A",
              loanInfo: { // match loanInfo to Program 3 loanInfo above
                maxLoanAmt: 14450,
                loanTerm36: true,
                loanTerm60: true,
                '0': { 
                    k: 5, 
                    apr36: 11.67, 
                    apr60: 12.99
                },
                '1': null
              }
            }
          ]
    },
    {
        name: "Web Development Online",
        url: "https://my.skills.fund/application?lenderCode=SKHELIWO18",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 5150,
            loanTerm36: true,
            loanTerm60: true,
            '0': null,
            '1': {
              apr36: 12.20, 
              apr60: 13.19
          }
        },
        defaultLoanType: "1", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false,
        showLoanTypes: false,
        locations: ["Metro A", "Metro B", "Metro C"],
        metros: [
            {
              location: "Metro A",
              loanInfo: { // match loanInfo to Program 3 loanInfo above
                maxLoanAmt: 5150,
                loanTerm36: true,
                loanTerm60: true,
                '0': null,
                '1': {
                    apr36: 12.20, 
                    apr60: 13.19
                }
              }
            }
          ]
    },
    {
        name: "Web Development Online Advanced",
        url: "https://my.skills.fund/application?lenderCode=SKHELIWA18",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 6700,
            loanTerm36: true,
            loanTerm60: true,
            '0': null,
            '1': {
              apr36: 12.20, 
              apr60: 13.19
          }
        },
        defaultLoanType: "1", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false,
        showLoanTypes: false,
        locations: ["Metro A", "Metro B", "Metro C"],
        metros: [
            {
              location: "Metro A",
              loanInfo: { // match loanInfo to Program 3 loanInfo above
                maxLoanAmt: 6700,
                loanTerm36: true,
                loanTerm60: true,
                '0': null,
                '1': {
                    apr36: 12.20, 
                    apr60: 13.19
                }
              }
            }
          ]
    },
]

// ***** BEGIN LOAN CALC TEXT INFO *****
export const programMaxText = "Choose the loan amount that works best for you. Borrow up to $12,450 for Full-Stack Web Development Immersive tuition and up to $2,000 for cost of living, up to $5,150 for Full-Stack Web Development Online tuition, up to $6,700 for Full-Stack Web Development Advanced Online tuition, up to $6,850 for Full-Stack Web Development After-Hours tuition, up to $6,150 for UI/UX Design Part-Time tuition, up to $12,500 for After-Hours Career Changer tuition, or up to $10,650 for Unity Game Development Immersive tuition and up to $2,000 for cost of living."

export const paymentTable = {
    headers: ["Program", "Tuition", "Cost of Living", "Max Total"],
    data: [
        {
            name: "PROGRAM 1",
            tuition: "$13,495",
            col: "$6,000",
            max: "$19,495"
        },
        {
            name: "PROGRAM 2",
            tuition: "$16,495",
            col: "$6,000",
            max: "$22,495"
        },
        {
            name: "PROGRAM 3",
            tuition: "$13,495",
            col: "--",
            max: "$13,495"
        },
    ],
    show: false
}

// ***** END LOAN CALC TEXT INFO *****


// ***** Snippets for Netlify ***** 

// before body Hubspot

// <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3871135.js"></script>

// before head Crazyegg

// <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0076/9926.js" async="async"></script>

// before body Yotpo

// <script type="text/javascript"> (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=!0, e.src="//staticw2.yotpo.com/vDnpGV6DFy9oeKaj5UugzYG5TCeQ4gxgEVs9BO3n/widget.js";var t=document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e,t)})(); </script>
