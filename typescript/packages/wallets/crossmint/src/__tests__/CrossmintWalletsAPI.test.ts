import type { CrossmintApiClient } from "@crossmint/common-sdk-base";
import { type Mock, beforeEach, describe, expect, it, vi } from "vitest";
import { SupportedSmartWalletChains } from "../chains";
import { CrossmintWalletsAPI } from "../wallets/CrossmintWalletsAPI";

// Mock fetch
const mockFetch = vi.fn() as unknown as typeof fetch & Mock;
global.fetch = mockFetch;

// Test utility to access private request method
const makeRequest = async (api: CrossmintWalletsAPI, endpoint: string, options?: RequestInit) => {
    return (api as unknown as { request: (endpoint: string, options?: RequestInit) => Promise<unknown> }).request(
        endpoint,
        options,
    );
};

describe("CrossmintWalletsAPI", () => {
    let api: CrossmintWalletsAPI;
    const mockCrossmintClient = {
        baseUrl: "https://staging.crossmint.com",
        authHeaders: { "x-api-key": "test-key" },
    } as CrossmintApiClient;

    beforeEach(() => {
        api = new CrossmintWalletsAPI(mockCrossmintClient);
        global.fetch = vi.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({}),
                status: 200,
                statusText: "OK",
            } as Response),
        );
    });

    describe("Wallet Management", () => {
        it("should get wallet details", async () => {
            const mockResponse = {
                type: "evm-smart-wallet",
                address: "0x123",
                config: {},
                createdAt: "2024-01-01",
            };
            global.fetch.mockImplementationOnce(() =>
                Promise.resolve({
                    status: 200,
                    statusText: "OK",
                    ok: true,
                    json: () => Promise.resolve(mockResponse),
                }),
            );

            const result = await api.getWallet("evm-smart-wallet:0x123");
            expect(result).toEqual(mockResponse);
        });

        it("should create a smart wallet", async () => {
            const mockResponse = {
                type: "evm-smart-wallet",
                address: "0x123",
                config: {},
                createdAt: "2024-01-01",
            };
            global.fetch.mockImplementationOnce(() =>
                Promise.resolve({
                    status: 200,
                    statusText: "OK",
                    ok: true,
                    json: () => Promise.resolve(mockResponse),
                }),
            );

            const result = await api.createSmartWallet();
            expect(result).toEqual(mockResponse);
        });

        it("should create a custodial wallet", async () => {
            const mockResponse = {
                type: "solana-custodial-wallet",
                address: "solana123",
                linkedUser: "user@test.com",
                createdAt: "2024-01-01",
            };
            global.fetch.mockImplementationOnce(() =>
                Promise.resolve({
                    status: 200,
                    statusText: "OK",
                    ok: true,
                    json: () => Promise.resolve(mockResponse),
                }),
            );

            const result = await api.createCustodialWallet("user@test.com");
            expect(result).toEqual(mockResponse);
        });
    });

    describe("Transaction Operations", () => {
        it("should create and sign a transaction", async () => {
            const mockResponse = {
                id: "tx123",
                walletType: "evm-smart-wallet",
                status: "pending",
                params: {
                    calls: [
                        {
                            to: "0x456",
                            value: "0",
                            data: "0x0",
                        },
                    ],
                },
                createdAt: "2024-01-01",
            };
            global.fetch.mockImplementationOnce(() =>
                Promise.resolve({
                    status: 200,
                    statusText: "OK",
                    ok: true,
                    json: () => Promise.resolve(mockResponse),
                }),
            );

            const result = await api.createTransactionForSmartWallet(
                "0x123",
                [
                    {
                        to: "0x456",
                        value: "0",
                        data: "0x0",
                    },
                ],
                "polygon" as SupportedSmartWalletChains,
            );
            expect(result).toEqual(mockResponse);
        });
    });

    describe("Signing Operations", () => {
        it("should sign typed data", async () => {
            const mockTypedData = {
                types: {
                    EIP712Domain: [
                        { name: "name", type: "string" },
                        { name: "version", type: "string" },
                    ],
                    Message: [{ name: "content", type: "string" }],
                },
                primaryType: "Message",
                domain: {
                    name: "Test App",
                    version: "1",
                },
                message: {
                    content: "Hello World",
                },
            };

            const mockResponse = {
                id: "sig123",
                type: "evm-typed-data",
                status: "completed",
                params: {
                    typedData: mockTypedData,
                    chain: "polygon",
                    signer: "evm-keypair:0x123",
                },
                createdAt: "2024-01-01",
            };
            global.fetch.mockImplementationOnce(() =>
                Promise.resolve({
                    status: 200,
                    statusText: "OK",
                    ok: true,
                    json: () => Promise.resolve(mockResponse),
                }),
            );

            const result = await api.signTypedDataForSmartWallet(
                "0x123",
                mockTypedData,
                "polygon" as SupportedSmartWalletChains,
                "evm-keypair:0x123",
            );
            expect(result).toEqual(mockResponse);
        });

        it("should sign a message", async () => {
            const mockResponse = {
                id: "sig123",
                walletType: "evm-smart-wallet",
                status: "completed",
                outputSignature: "0xsig",
                approvals: {
                    pending: [],
                    submitted: [],
                },
                createdAt: "2024-01-01",
            };
            global.fetch.mockImplementationOnce(() =>
                Promise.resolve({
                    status: 200,
                    statusText: "OK",
                    ok: true,
                    json: () => Promise.resolve(mockResponse),
                }),
            );

            const result = await api.signMessageForSmartWallet(
                "0x123",
                "Hello",
                "polygon" as SupportedSmartWalletChains,
            );
            expect(result).toEqual(mockResponse);
        });
    });

    describe("NFT Operations", () => {
        it("should get all collections", async () => {
            const mockResponse = {
                collections: [
                    {
                        id: "col123",
                        name: "Test Collection",
                        chain: "polygon",
                    },
                ],
            };
            global.fetch.mockImplementationOnce(() =>
                Promise.resolve({
                    status: 200,
                    statusText: "OK",
                    ok: true,
                    json: () => Promise.resolve(mockResponse),
                }),
            );

            const result = await makeRequest(api, "/2022-06-09/collections/");
            expect(result).toEqual(mockResponse);
        });

        it("should create a collection", async () => {
            const mockResponse = {
                id: "col123",
                actionId: "action123",
                chain: "ethereum",
            };
            global.fetch.mockImplementationOnce(() =>
                Promise.resolve({
                    status: 200,
                    statusText: "OK",
                    ok: true,
                    json: () => Promise.resolve(mockResponse),
                }),
            );

            const result = await makeRequest(api, "/2022-06-09/collections/", {
                method: "POST",
                body: JSON.stringify({
                    metadata: {
                        name: "Test Collection",
                        description: "Test Description",
                    },
                }),
            });
            expect(result).toEqual(mockResponse);
        });

        it("should mint an NFT", async () => {
            const mockResponse = {
                id: "nft123",
                actionId: "action123",
                onChain: {
                    contractAddress: "0x123",
                },
            };
            global.fetch.mockImplementationOnce(() =>
                Promise.resolve({
                    status: 200,
                    statusText: "OK",
                    ok: true,
                    json: () => Promise.resolve(mockResponse),
                }),
            );

            const result = await makeRequest(api, "/2022-06-09/collections/col123/nfts", {
                method: "POST",
                body: JSON.stringify({
                    recipient: "recipient@test.com",
                    metadata: {
                        name: "Test NFT",
                        description: "Test NFT Description",
                        image: "https://test.com/image.png",
                    },
                }),
            });
            expect(result).toEqual(mockResponse);
        });
    });

    describe("Faucet Operations", () => {
        it("should request faucet tokens", async () => {
            const mockResponse = {
                status: "success",
                message: "Balance topped up successfully",
            };
            global.fetch.mockImplementationOnce(() =>
                Promise.resolve({
                    status: 200,
                    statusText: "OK",
                    ok: true,
                    json: () => Promise.resolve(mockResponse),
                }),
            );

            const result = await makeRequest(api, "/wallets/0x123/balances", {
                method: "POST",
                body: JSON.stringify({
                    amount: 10,
                    currency: "usdc",
                    chain: "ethereum-sepolia",
                }),
            });
            expect(result).toEqual(mockResponse);
        });
    });

    describe("Async Operations", () => {
        it("should wait for action completion", async () => {
            const mockResponse = {
                status: "succeeded",
                data: {
                    result: "success",
                },
            };
            global.fetch.mockImplementationOnce(() =>
                Promise.resolve({
                    status: 200,
                    statusText: "OK",
                    ok: true,
                    json: () => Promise.resolve(mockResponse),
                }),
            );

            const result = await makeRequest(api, "/2022-06-09/actions/action123");
            expect(result).toEqual(mockResponse);
        });

        it("should timeout waiting for action after max attempts", async () => {
            const mockResponse = {
                status: "pending",
            };
            global.fetch = vi.fn().mockRejectedValue(new Error("Timeout waiting for action completion"));

            await expect(makeRequest(api, "/2022-06-09/actions/action123")).rejects.toThrow(/Timeout/);
        });
    });

    describe("Multiple Approvals", () => {
        it("should handle multiple transaction approvals", async () => {
            const mockResponse = {
                id: "tx123",
                status: "success",
                approvals: {
                    submitted: [
                        { signer: "signer1", signature: "sig1" },
                        { signer: "signer2", signature: "sig2" },
                    ],
                    pending: [],
                },
            };
            global.fetch.mockImplementationOnce(() =>
                Promise.resolve({
                    status: 200,
                    statusText: "OK",
                    ok: true,
                    json: () => Promise.resolve(mockResponse),
                }),
            );

            const result = await api.approveTransaction("wallet123", "tx123", [
                { signer: "signer1", signature: "sig1" },
                { signer: "signer2", signature: "sig2" },
            ]);
            expect(result).toEqual(mockResponse);
        });
    });

    describe("Error Handling", () => {
        it("should handle API errors", async () => {
            const errorResponse = {
                error: "Invalid request",
                message: "Bad parameters",
            };
            global.fetch.mockImplementationOnce(() =>
                Promise.resolve({
                    ok: false,
                    status: 400,
                    statusText: "Bad Request",
                    json: () => Promise.resolve(errorResponse),
                }),
            );

            await expect(api.createSmartWallet()).rejects.toThrow(
                /Error 400: {"error":"Invalid request","message":"Bad parameters"}/,
            );
        });

        it("should handle network errors", async () => {
            global.fetch.mockRejectedValueOnce(new Error("Network error"));
            await expect(api.createSmartWallet()).rejects.toThrow(/Network error/);
        });
    });
});
