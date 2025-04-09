export { erc20Abi } from "./ERC20";

// Replace with the correct ABI for cToken and Comptroller
// export const CTOKEN_ABI = [
//     { name: 'mint', type: 'function', stateMutability: 'payable', inputs: [{ type: 'uint256' }], outputs: [], },
//     { name: 'redeemUnderlying', type: 'function', stateMutability: 'nonpayable', inputs: [{ type: 'uint256' }] },
//     { name: 'redeem', type: 'function', stateMutability: 'nonpayable', inputs: [{ type: 'uint256' }] },
//     { name: 'borrow', type: 'function', stateMutability: 'nonpayable', inputs: [{ type: 'uint256' }] },
//     { name: 'repayBorrow', type: 'function', stateMutability: 'payable', inputs: [{ type: 'uint256' }] },
//     { name: 'balanceOf', type: 'function', stateMutability: 'view', inputs: [{ type: 'address' }], outputs: [{ type: 'uint256' }] },
// ] as any;

export const CTOKEN_ABI = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "cashPrior",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "interestAccumulated",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "borrowIndex",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalBorrows",
                type: "uint256",
            },
        ],
        name: "AccrueInterest",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "borrower",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "borrowAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "accountBorrows",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalBorrows",
                type: "uint256",
            },
        ],
        name: "Borrow",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "error",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "info",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "detail",
                type: "uint256",
            },
        ],
        name: "Failure",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "liquidator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "borrower",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "repayAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "cTokenCollateral",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "seizeTokens",
                type: "uint256",
            },
        ],
        name: "LiquidateBorrow",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "minter",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "mintAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "mintTokens",
                type: "uint256",
            },
        ],
        name: "Mint",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "oldAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "NewAdmin",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract ComptrollerInterface",
                name: "oldComptroller",
                type: "address",
            },
            {
                indexed: false,
                internalType: "contract ComptrollerInterface",
                name: "newComptroller",
                type: "address",
            },
        ],
        name: "NewComptroller",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract InterestRateModel",
                name: "oldInterestRateModel",
                type: "address",
            },
            {
                indexed: false,
                internalType: "contract InterestRateModel",
                name: "newInterestRateModel",
                type: "address",
            },
        ],
        name: "NewMarketInterestRateModel",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "oldPendingAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newPendingAdmin",
                type: "address",
            },
        ],
        name: "NewPendingAdmin",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "oldReserveFactorMantissa",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newReserveFactorMantissa",
                type: "uint256",
            },
        ],
        name: "NewReserveFactor",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "redeemer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "redeemAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "redeemTokens",
                type: "uint256",
            },
        ],
        name: "Redeem",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "payer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "borrower",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "repayAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "accountBorrows",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalBorrows",
                type: "uint256",
            },
        ],
        name: "RepayBorrow",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "benefactor",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "addAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newTotalReserves",
                type: "uint256",
            },
        ],
        name: "ReservesAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "admin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "reduceAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newTotalReserves",
                type: "uint256",
            },
        ],
        name: "ReservesReduced",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        constant: false,
        inputs: [],
        name: "_acceptAdmin",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "addAmount",
                type: "uint256",
            },
        ],
        name: "_addReserves",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "reduceAmount",
                type: "uint256",
            },
        ],
        name: "_reduceReserves",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "contract ComptrollerInterface",
                name: "newComptroller",
                type: "address",
            },
        ],
        name: "_setComptroller",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "contract InterestRateModel",
                name: "newInterestRateModel",
                type: "address",
            },
        ],
        name: "_setInterestRateModel",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address payable",
                name: "newPendingAdmin",
                type: "address",
            },
        ],
        name: "_setPendingAdmin",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "newReserveFactorMantissa",
                type: "uint256",
            },
        ],
        name: "_setReserveFactor",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "accrualBlockNumber",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "accrueInterest",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "admin",
        outputs: [
            {
                internalType: "address payable",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "balanceOfUnderlying",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "borrowAmount",
                type: "uint256",
            },
        ],
        name: "borrow",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "borrowBalanceCurrent",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "borrowBalanceStored",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "borrowIndex",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "borrowRatePerBlock",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "comptroller",
        outputs: [
            {
                internalType: "contract ComptrollerInterface",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "exchangeRateCurrent",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "exchangeRateStored",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "getAccountSnapshot",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "getCash",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "underlying_",
                type: "address",
            },
            {
                internalType: "contract ComptrollerInterface",
                name: "comptroller_",
                type: "address",
            },
            {
                internalType: "contract InterestRateModel",
                name: "interestRateModel_",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "initialExchangeRateMantissa_",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "name_",
                type: "string",
            },
            {
                internalType: "string",
                name: "symbol_",
                type: "string",
            },
            {
                internalType: "uint8",
                name: "decimals_",
                type: "uint8",
            },
        ],
        name: "initialize",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "contract ComptrollerInterface",
                name: "comptroller_",
                type: "address",
            },
            {
                internalType: "contract InterestRateModel",
                name: "interestRateModel_",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "initialExchangeRateMantissa_",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "name_",
                type: "string",
            },
            {
                internalType: "string",
                name: "symbol_",
                type: "string",
            },
            {
                internalType: "uint8",
                name: "decimals_",
                type: "uint8",
            },
        ],
        name: "initialize",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "interestRateModel",
        outputs: [
            {
                internalType: "contract InterestRateModel",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "isCToken",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "borrower",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "repayAmount",
                type: "uint256",
            },
            {
                internalType: "contract CTokenInterface",
                name: "cTokenCollateral",
                type: "address",
            },
        ],
        name: "liquidateBorrow",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "mintAmount",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "pendingAdmin",
        outputs: [
            {
                internalType: "address payable",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "redeemTokens",
                type: "uint256",
            },
        ],
        name: "redeem",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "redeemAmount",
                type: "uint256",
            },
        ],
        name: "redeemUnderlying",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "repayAmount",
                type: "uint256",
            },
        ],
        name: "repayBorrow",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "borrower",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "repayAmount",
                type: "uint256",
            },
        ],
        name: "repayBorrowBehalf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "reserveFactorMantissa",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "liquidator",
                type: "address",
            },
            {
                internalType: "address",
                name: "borrower",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "seizeTokens",
                type: "uint256",
            },
        ],
        name: "seize",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "supplyRatePerBlock",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "totalBorrows",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "totalBorrowsCurrent",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "totalReserves",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "dst",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "src",
                type: "address",
            },
            {
                internalType: "address",
                name: "dst",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "underlying",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
] as any;

export const COMPTROLLER_ABI = [
    {
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "action",
                type: "string",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "pauseState",
                type: "bool",
            },
        ],
        name: "ActionPaused",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract CToken",
                name: "cToken",
                type: "address",
            },
            {
                indexed: false,
                internalType: "string",
                name: "action",
                type: "string",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "pauseState",
                type: "bool",
            },
        ],
        name: "ActionPaused",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "error",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "info",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "detail",
                type: "uint256",
            },
        ],
        name: "Failure",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract CToken",
                name: "cToken",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "MarketEntered",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract CToken",
                name: "cToken",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "MarketExited",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract CToken",
                name: "cToken",
                type: "address",
            },
        ],
        name: "MarketListed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "oldCloseFactorMantissa",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newCloseFactorMantissa",
                type: "uint256",
            },
        ],
        name: "NewCloseFactor",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract CToken",
                name: "cToken",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "oldCollateralFactorMantissa",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newCollateralFactorMantissa",
                type: "uint256",
            },
        ],
        name: "NewCollateralFactor",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "oldLiquidationIncentiveMantissa",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newLiquidationIncentiveMantissa",
                type: "uint256",
            },
        ],
        name: "NewLiquidationIncentive",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "oldMaxAssets",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newMaxAssets",
                type: "uint256",
            },
        ],
        name: "NewMaxAssets",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "oldPauseGuardian",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newPauseGuardian",
                type: "address",
            },
        ],
        name: "NewPauseGuardian",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract PriceOracle",
                name: "oldPriceOracle",
                type: "address",
            },
            {
                indexed: false,
                internalType: "contract PriceOracle",
                name: "newPriceOracle",
                type: "address",
            },
        ],
        name: "NewPriceOracle",
        type: "event",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "contract Unitroller",
                name: "unitroller",
                type: "address",
            },
        ],
        name: "_become",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "_borrowGuardianPaused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "_mintGuardianPaused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "contract CToken",
                name: "cToken",
                type: "address",
            },
            {
                internalType: "bool",
                name: "state",
                type: "bool",
            },
        ],
        name: "_setBorrowPaused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "newCloseFactorMantissa",
                type: "uint256",
            },
        ],
        name: "_setCloseFactor",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "contract CToken",
                name: "cToken",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "newCollateralFactorMantissa",
                type: "uint256",
            },
        ],
        name: "_setCollateralFactor",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "newLiquidationIncentiveMantissa",
                type: "uint256",
            },
        ],
        name: "_setLiquidationIncentive",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "newMaxAssets",
                type: "uint256",
            },
        ],
        name: "_setMaxAssets",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "contract CToken",
                name: "cToken",
                type: "address",
            },
            {
                internalType: "bool",
                name: "state",
                type: "bool",
            },
        ],
        name: "_setMintPaused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "newPauseGuardian",
                type: "address",
            },
        ],
        name: "_setPauseGuardian",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "contract PriceOracle",
                name: "newOracle",
                type: "address",
            },
        ],
        name: "_setPriceOracle",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "bool",
                name: "state",
                type: "bool",
            },
        ],
        name: "_setSeizePaused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "bool",
                name: "state",
                type: "bool",
            },
        ],
        name: "_setTransferPaused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "contract CToken",
                name: "cToken",
                type: "address",
            },
        ],
        name: "_supportMarket",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "accountAssets",
        outputs: [
            {
                internalType: "contract CToken",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "admin",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "cToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "borrower",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "borrowAmount",
                type: "uint256",
            },
        ],
        name: "borrowAllowed",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "borrowGuardianPaused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "cToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "borrower",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "borrowAmount",
                type: "uint256",
            },
        ],
        name: "borrowVerify",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "contract CToken",
                name: "cToken",
                type: "address",
            },
        ],
        name: "checkMembership",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "closeFactorMantissa",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "comptrollerImplementation",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address[]",
                name: "cTokens",
                type: "address[]",
            },
        ],
        name: "enterMarkets",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "cTokenAddress",
                type: "address",
            },
        ],
        name: "exitMarket",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "getAccountLiquidity",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "getAssetsIn",
        outputs: [
            {
                internalType: "contract CToken[]",
                name: "",
                type: "address[]",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "isComptroller",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "cTokenBorrowed",
                type: "address",
            },
            {
                internalType: "address",
                name: "cTokenCollateral",
                type: "address",
            },
            {
                internalType: "address",
                name: "liquidator",
                type: "address",
            },
            {
                internalType: "address",
                name: "borrower",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "repayAmount",
                type: "uint256",
            },
        ],
        name: "liquidateBorrowAllowed",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "cTokenBorrowed",
                type: "address",
            },
            {
                internalType: "address",
                name: "cTokenCollateral",
                type: "address",
            },
            {
                internalType: "address",
                name: "liquidator",
                type: "address",
            },
            {
                internalType: "address",
                name: "borrower",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "actualRepayAmount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "seizeTokens",
                type: "uint256",
            },
        ],
        name: "liquidateBorrowVerify",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "cTokenBorrowed",
                type: "address",
            },
            {
                internalType: "address",
                name: "cTokenCollateral",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "actualRepayAmount",
                type: "uint256",
            },
        ],
        name: "liquidateCalculateSeizeTokens",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "liquidationIncentiveMantissa",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "markets",
        outputs: [
            {
                internalType: "bool",
                name: "isListed",
                type: "bool",
            },
            {
                internalType: "uint256",
                name: "collateralFactorMantissa",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "maxAssets",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "cToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "minter",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "mintAmount",
                type: "uint256",
            },
        ],
        name: "mintAllowed",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "mintGuardianPaused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "cToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "minter",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "actualMintAmount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "mintTokens",
                type: "uint256",
            },
        ],
        name: "mintVerify",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "oracle",
        outputs: [
            {
                internalType: "contract PriceOracle",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "pauseGuardian",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "pendingAdmin",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "pendingComptrollerImplementation",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "cToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "redeemer",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "redeemTokens",
                type: "uint256",
            },
        ],
        name: "redeemAllowed",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "cToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "redeemer",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "redeemAmount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "redeemTokens",
                type: "uint256",
            },
        ],
        name: "redeemVerify",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "cToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "payer",
                type: "address",
            },
            {
                internalType: "address",
                name: "borrower",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "repayAmount",
                type: "uint256",
            },
        ],
        name: "repayBorrowAllowed",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "cToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "payer",
                type: "address",
            },
            {
                internalType: "address",
                name: "borrower",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "actualRepayAmount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "borrowerIndex",
                type: "uint256",
            },
        ],
        name: "repayBorrowVerify",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "cTokenCollateral",
                type: "address",
            },
            {
                internalType: "address",
                name: "cTokenBorrowed",
                type: "address",
            },
            {
                internalType: "address",
                name: "liquidator",
                type: "address",
            },
            {
                internalType: "address",
                name: "borrower",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "seizeTokens",
                type: "uint256",
            },
        ],
        name: "seizeAllowed",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "seizeGuardianPaused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "cTokenCollateral",
                type: "address",
            },
            {
                internalType: "address",
                name: "cTokenBorrowed",
                type: "address",
            },
            {
                internalType: "address",
                name: "liquidator",
                type: "address",
            },
            {
                internalType: "address",
                name: "borrower",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "seizeTokens",
                type: "uint256",
            },
        ],
        name: "seizeVerify",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "cToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "src",
                type: "address",
            },
            {
                internalType: "address",
                name: "dst",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "transferTokens",
                type: "uint256",
            },
        ],
        name: "transferAllowed",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "transferGuardianPaused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "cToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "src",
                type: "address",
            },
            {
                internalType: "address",
                name: "dst",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "transferTokens",
                type: "uint256",
            },
        ],
        name: "transferVerify",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
] as any;

export const CETHER_ABI = [
    {
        inputs: [
            {
                internalType: "contract ComptrollerInterface",
                name: "comptroller_",
                type: "address",
            },
            {
                internalType: "contract InterestRateModel",
                name: "interestRateModel_",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "initialExchangeRateMantissa_",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "name_",
                type: "string",
            },
            {
                internalType: "string",
                name: "symbol_",
                type: "string",
            },
            {
                internalType: "uint8",
                name: "decimals_",
                type: "uint8",
            },
            {
                internalType: "address payable",
                name: "admin_",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "cashPrior",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "interestAccumulated",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "borrowIndex",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalBorrows",
                type: "uint256",
            },
        ],
        name: "AccrueInterest",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "borrower",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "borrowAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "accountBorrows",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalBorrows",
                type: "uint256",
            },
        ],
        name: "Borrow",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "error",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "info",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "detail",
                type: "uint256",
            },
        ],
        name: "Failure",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "liquidator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "borrower",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "repayAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "cTokenCollateral",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "seizeTokens",
                type: "uint256",
            },
        ],
        name: "LiquidateBorrow",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "minter",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "mintAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "mintTokens",
                type: "uint256",
            },
        ],
        name: "Mint",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "oldAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "NewAdmin",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract ComptrollerInterface",
                name: "oldComptroller",
                type: "address",
            },
            {
                indexed: false,
                internalType: "contract ComptrollerInterface",
                name: "newComptroller",
                type: "address",
            },
        ],
        name: "NewComptroller",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract InterestRateModel",
                name: "oldInterestRateModel",
                type: "address",
            },
            {
                indexed: false,
                internalType: "contract InterestRateModel",
                name: "newInterestRateModel",
                type: "address",
            },
        ],
        name: "NewMarketInterestRateModel",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "oldPendingAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newPendingAdmin",
                type: "address",
            },
        ],
        name: "NewPendingAdmin",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "oldReserveFactorMantissa",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newReserveFactorMantissa",
                type: "uint256",
            },
        ],
        name: "NewReserveFactor",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "redeemer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "redeemAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "redeemTokens",
                type: "uint256",
            },
        ],
        name: "Redeem",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "payer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "borrower",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "repayAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "accountBorrows",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalBorrows",
                type: "uint256",
            },
        ],
        name: "RepayBorrow",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "benefactor",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "addAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newTotalReserves",
                type: "uint256",
            },
        ],
        name: "ReservesAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "admin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "reduceAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newTotalReserves",
                type: "uint256",
            },
        ],
        name: "ReservesReduced",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        payable: true,
        stateMutability: "payable",
        type: "fallback",
    },
    {
        constant: false,
        inputs: [],
        name: "_acceptAdmin",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "reduceAmount",
                type: "uint256",
            },
        ],
        name: "_reduceReserves",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "contract ComptrollerInterface",
                name: "newComptroller",
                type: "address",
            },
        ],
        name: "_setComptroller",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "contract InterestRateModel",
                name: "newInterestRateModel",
                type: "address",
            },
        ],
        name: "_setInterestRateModel",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address payable",
                name: "newPendingAdmin",
                type: "address",
            },
        ],
        name: "_setPendingAdmin",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "newReserveFactorMantissa",
                type: "uint256",
            },
        ],
        name: "_setReserveFactor",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "accrualBlockNumber",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "accrueInterest",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "admin",
        outputs: [
            {
                internalType: "address payable",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "balanceOfUnderlying",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "borrowAmount",
                type: "uint256",
            },
        ],
        name: "borrow",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "borrowBalanceCurrent",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "borrowBalanceStored",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "borrowIndex",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "borrowRatePerBlock",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "comptroller",
        outputs: [
            {
                internalType: "contract ComptrollerInterface",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "exchangeRateCurrent",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "exchangeRateStored",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "getAccountSnapshot",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "getCash",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "contract ComptrollerInterface",
                name: "comptroller_",
                type: "address",
            },
            {
                internalType: "contract InterestRateModel",
                name: "interestRateModel_",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "initialExchangeRateMantissa_",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "name_",
                type: "string",
            },
            {
                internalType: "string",
                name: "symbol_",
                type: "string",
            },
            {
                internalType: "uint8",
                name: "decimals_",
                type: "uint8",
            },
        ],
        name: "initialize",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "interestRateModel",
        outputs: [
            {
                internalType: "contract InterestRateModel",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "isCToken",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "borrower",
                type: "address",
            },
            {
                internalType: "contract CToken",
                name: "cTokenCollateral",
                type: "address",
            },
        ],
        name: "liquidateBorrow",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "mint",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "pendingAdmin",
        outputs: [
            {
                internalType: "address payable",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "redeemTokens",
                type: "uint256",
            },
        ],
        name: "redeem",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "redeemAmount",
                type: "uint256",
            },
        ],
        name: "redeemUnderlying",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "repayBorrow",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "borrower",
                type: "address",
            },
        ],
        name: "repayBorrowBehalf",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "reserveFactorMantissa",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "liquidator",
                type: "address",
            },
            {
                internalType: "address",
                name: "borrower",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "seizeTokens",
                type: "uint256",
            },
        ],
        name: "seize",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "supplyRatePerBlock",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "totalBorrows",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "totalBorrowsCurrent",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "totalReserves",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "dst",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "src",
                type: "address",
            },
            {
                internalType: "address",
                name: "dst",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
] as any;
