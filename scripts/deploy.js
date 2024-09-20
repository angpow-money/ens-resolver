


0xbFDd8E8dc171D29A766802d0a94A2fB57A706a07





async function deploy() {

  
    const Factory = await ethers.getContractFactory("OffchainResolverFactory");
    const factory = await Factory.attach("0xC2264dCcb9de4c8bb57b05720065e226978b7E4C")
    const tx = await factory.createOffchainResolver(
        "https://gateway.angpow.money/{sender}/{data}.json",
        [
            "0xbFDd8E8dc171D29A766802d0a94A2fB57A706a07",
        ]
    )
    console.log(tx);

}

deploy()
