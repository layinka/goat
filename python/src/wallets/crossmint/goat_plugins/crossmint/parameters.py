from enum import Enum
from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any, Literal


class CoreSignerType(str, Enum):
    """Core signer types supported by Crossmint."""
    EVM_KEYPAIR = "evm-keypair"
    SOLANA_KEYPAIR = "solana-keypair"
    WEBAUTHN = "webauthn"
    EVM_FIREBLOCKS_CUSTODIAL = "evm-fireblocks-custodial"
    SOLANA_FIREBLOCKS_CUSTODIAL = "solana-fireblocks-custodial"
    EVM_KEYPAIR_SESSION = "evm-keypair-session"


class AdminSigner(BaseModel):
    """Configuration for admin signer in wallet creation."""
    type: CoreSignerType
    address: Optional[str] = None
    locator: Optional[str] = None


class CreateSmartWalletParameters(BaseModel):
    """Parameters for creating an EVM smart wallet."""
    admin_signer: Optional[AdminSigner] = Field(
        None,
        description="Optional admin signer configuration for the wallet"
    )


class CreateCustodialWalletParameters(BaseModel):
    """Parameters for creating a Solana custodial wallet."""
    linked_user: str = Field(
        description="User identifier to link the wallet to (email, phone, or user ID)"
    )


class CreateWalletRequest(BaseModel):
    """Request parameters for wallet creation."""
    type: str = Field(description="Wallet type (evm-smart-wallet or solana-custodial-wallet)")
    config: Optional[Dict[str, Any]] = Field(
        None,
        description="Optional configuration including admin signer"
    )
    linked_user: Optional[str] = Field(
        None,
        description="Optional user identifier to link the wallet to"
    )


class WalletResponse(BaseModel):
    """Response structure for wallet operations."""
    type: str
    address: str
    config: Dict[str, Any]
    linked_user: Optional[str] = None
    created_at: str


class Call(BaseModel):
    """Structure for EVM transaction calls."""
    to: str
    value: str
    data: str


class TransactionParams(BaseModel):
    """Parameters for transaction creation."""
    calls: Optional[List[Call]] = None
    chain: Optional[str] = None
    signer: Optional[str] = None
    transaction: Optional[str] = None
    signers: Optional[List[str]] = None


class ApprovalSubmission(BaseModel):
    """Structure for transaction/signature approvals."""
    signer: str
    message: str
    submitted_at: str
    signature: str
    metadata: Optional[Dict[str, Any]] = None


class TransactionApprovals(BaseModel):
    """Structure for transaction approvals."""
    pending: List[Dict[str, Any]]
    submitted: List[ApprovalSubmission]
    required: Optional[int] = None


class SignMessageRequest(BaseModel):
    """Request parameters for message signing."""
    type: str = Field(description="Message type (evm-message or solana-message)")
    params: Dict[str, Any] = Field(description="Message parameters including the message to sign")


class SignTypedDataRequest(BaseModel):
    """Request parameters for typed data signing."""
    type: Literal["evm-typed-data"]
    params: Dict[str, Any] = Field(description="Parameters including typed data and chain")


class SignatureResponse(BaseModel):
    """Response structure for signature operations."""
    id: str
    wallet_type: str
    status: str
    output_signature: Optional[str] = None
    approvals: TransactionApprovals
    created_at: str


class TransactionResponse(BaseModel):
    """Response structure for transaction operations."""
    id: str
    wallet_type: str
    status: str
    approvals: Optional[TransactionApprovals] = None
    params: TransactionParams
    on_chain: Optional[Dict[str, Any]] = None
    created_at: str
