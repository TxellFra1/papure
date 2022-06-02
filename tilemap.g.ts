// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001000000000000000000010101000101010001010101010101000101010001010100000000000001010001010100010101010000000000000100000101000101010000010101010001010001010001010101010101010100010000010100010101010100000000000100000000000101000001000101010001010100010101000100010000010000000001000100000001000101000101010101010001000101010000010001000000000000010000010101000100010001010101010101000001010000000100010000000100000000010100010101000100010001000101010100000000010001000100010001010101000000000100000001000000010001`, img`
2 . . . . . . . . . 2 2 2 . 2 . 
2 . 2 2 2 2 2 2 2 . 2 2 2 . 2 . 
2 . . . . . . 2 2 . 2 2 2 . 2 . 
2 2 . . . . . . 2 . . 2 2 . . . 
2 . . 2 2 2 2 . 2 2 . 2 2 . 2 2 
2 2 2 2 2 2 2 . 2 . . 2 2 . 2 2 
2 2 2 . . . . . 2 . . . . . 2 2 
. . 2 . 2 2 2 . 2 2 2 . 2 2 2 . 
2 . 2 . . 2 . . . . 2 . 2 . . . 
2 . 2 2 . 2 2 2 2 2 2 . 2 . 2 2 
2 . . 2 . 2 . . . . . . 2 . . 2 
2 2 . 2 . 2 . 2 2 2 2 2 2 2 . . 
2 2 . . . 2 . 2 . . . 2 . . . . 
2 2 . 2 2 2 . 2 . 2 . 2 . 2 2 2 
2 . . . . 2 . 2 . 2 . 2 . 2 2 2 
2 . . . . 2 . . . 2 . . . 2 . 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
