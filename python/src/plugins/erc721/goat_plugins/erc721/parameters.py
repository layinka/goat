from pydantic import BaseModel, Field


class GetBalanceParameters(BaseModel):
    wallet: str = Field(description="The address to get the NFT balance of")


class TransferParameters(BaseModel):
    to: str = Field(description="The address to transfer the NFT to")
    tokenId: str = Field(description="The ID of the NFT to transfer")


class TotalSupplyParameters(BaseModel):
    pass


class ApproveParameters(BaseModel):
    spender: str = Field(description="The address to approve for the NFT")
    tokenId: str = Field(description="The ID of the NFT to approve")


class TransferFromParameters(BaseModel):
    from_: str = Field(alias="from", description="The address to transfer the NFT from")
    to: str = Field(description="The address to transfer the NFT to")
    tokenId: str = Field(description="The ID of the NFT to transfer")


class OwnerOfParameters(BaseModel):
    tokenId: str = Field(description="The ID of the NFT to check ownership of")


class SetApprovalForAllParameters(BaseModel):
    operator: str = Field(description="The address to set approval for")
    approved: bool = Field(description="Whether to approve or revoke approval")


class GetApprovedParameters(BaseModel):
    tokenId: str = Field(description="The ID of the NFT to check approval for")


class IsApprovedForAllParameters(BaseModel):
    owner: str = Field(description="The address of the owner")
    operator: str = Field(description="The address of the operator")
