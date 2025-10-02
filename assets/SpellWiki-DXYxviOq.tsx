import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Import spell configs
import exori from "@/assets/configs/spells/exori.json";
import exoriMas from "@/assets/configs/spells/exori-mas.json";
import exoriMin from "@/assets/configs/spells/exori-min.json";
import exoriIco from "@/assets/configs/spells/exori-ico.json";
import exoriCon from "@/assets/configs/spells/exori-con.json";
import exoriAmpKor from "@/assets/configs/spells/exori-amp-kor.json";
import exoriFlam from "@/assets/configs/spells/exori-flam.json";
import exoriFrigo from "@/assets/configs/spells/exori-frigo.json";
import exoriHur from "@/assets/configs/spells/exori-hur.json";
import exoriMort from "@/assets/configs/spells/exori-mort.json";
import exoriSan from "@/assets/configs/spells/exori-san.json";
import exoriTera from "@/assets/configs/spells/exori-tera.json";
import exoriVis from "@/assets/configs/spells/exori-vis.json";
import exoriMoeIco from "@/assets/configs/spells/exori-moe-ico.json";
import exoriMasSan from "@/assets/configs/spells/exori-mas-san.json";
import exevoVisLux from "@/assets/configs/spells/exevo-vis-lux.json";
import exevoFrigoHur from "@/assets/configs/spells/exevo-frigo-hur.json";
import exevoGranMasFlam from "@/assets/configs/spells/exevo-gran-mas-flam.json";
import exevoGranMasFrigo from "@/assets/configs/spells/exevo-gran-mas-frigo.json";
import exevoGranMasVis from "@/assets/configs/spells/exevo-gran-mas-vis.json";
import exevoMasSan from "@/assets/configs/spells/exevo-mas-san.json";
import exevoTempoMasSan from "@/assets/configs/spells/exevo-tempo-mas-san.json";
import exevoUlusTera from "@/assets/configs/spells/exevo-ulus-tera.json";
import exura from "@/assets/configs/spells/exura.json";
import utaniHur from "@/assets/configs/spells/utani-hur.json";
import utura from "@/assets/configs/spells/utura.json";
import autoLoot from "@/assets/configs/spells/auto-loot.json";
import wealthDuplex from "@/assets/configs/spells/wealth-duplex.json";
import utitoTempo from "@/assets/configs/spells/utito-tempo.json";
import utamoTempo from "@/assets/configs/spells/utamo-tempo.json";
import xpBoost from "@/assets/configs/spells/xp-boost.json";
import utoriKor from "@/assets/configs/spells/utori-kor.json";
import utoriPox from "@/assets/configs/spells/utori-pox.json";
import utoriSan from "@/assets/configs/spells/utori-san.json";
import utoriMort from "@/assets/configs/spells/utori-mort.json";
import utevoRes from "@/assets/configs/spells/utevo-res.json";

// Import ultimate spell configs
import utevoGranRes from "@/assets/configs/spells/ultimates/utevo-gran-res.json";
import exoriGranCon from "@/assets/configs/spells/ultimates/exori-gran-con.json";
import exoriGranTera from "@/assets/configs/spells/ultimates/exori-gran-tera.json";
import exoriGranFlam from "@/assets/configs/spells/ultimates/exori-gran-flam.json";
import utoriGranKor from "@/assets/configs/spells/ultimates/utori-gran-kor.json";
import utoriGranPox from "@/assets/configs/spells/ultimates/utori-gran-pox.json";
import utoriGranSan from "@/assets/configs/spells/ultimates/utori-gran-san.json";
import utoriGranMort from "@/assets/configs/spells/ultimates/utori-gran-mort.json";
import exoriGranMoeIco from "@/assets/configs/spells/ultimates/exori-gran-moe-ico.json";
import exoriGranIco from "@/assets/configs/spells/ultimates/exori-gran-ico.json";
import exoriGranMort from "@/assets/configs/spells/ultimates/exori-gran-mort.json";
import exoriGranAmpKor from "@/assets/configs/spells/ultimates/exori-gran-amp-kor.json";
import exoriGranSan from "@/assets/configs/spells/ultimates/exori-gran-san.json";
import exoriGranFrigo from "@/assets/configs/spells/ultimates/exori-gran-frigo.json";
import exoriGranHur from "@/assets/configs/spells/ultimates/exori-gran-hur.json";
import exoriGranVis from "@/assets/configs/spells/ultimates/exori-gran-vis.json";
import exevoGranVisLux from "@/assets/configs/spells/ultimates/exevo-gran-vis-lux.json";
import exevoGranFrigoHur from "@/assets/configs/spells/ultimates/exevo-gran-frigo-hur.json";
import exoriGranMin from "@/assets/configs/spells/ultimates/exori-gran-min.json";
import exoriGran from "@/assets/configs/spells/ultimates/exori-gran.json";
import exevoGranUlusTera from "@/assets/configs/spells/ultimates/exevo-gran-ulus-tera.json";
import exoriGranMas from "@/assets/configs/spells/ultimates/exori-gran-mas.json";
import exoriGranMasSan from "@/assets/configs/spells/ultimates/exori-gran-mas-san.json";
import exevoGranMasSan from "@/assets/configs/spells/ultimates/exevo-gran-mas-san.json";
import exevoTempoGranMasSan from "@/assets/configs/spells/ultimates/exevo-tempo-gran-mas-san.json";
import exevoUltraMasFrigo from "@/assets/configs/spells/ultimates/exevo-ultra-mas-frigo.json";
import exevoUltraMasVis from "@/assets/configs/spells/ultimates/exevo-ultra-mas-vis.json";
import exevoUltraMasFlam from "@/assets/configs/spells/ultimates/exevo-ultra-mas-flam.json";

interface Spell {
  name: string;
  vocations: string[];
  iconPath: string;
  level: number;
  type: string;
  elementType?: string;
  minDamage?: number;
  baseDamage?: number;
  cooldown?: number;
  prerequisites?: string[];
  powerUp?: {
    type: string;
    stars: Array<{
      star: number;
      message: { en: string };
    }>;
  };
}

const baseSpells: Spell[] = [
  exori, exoriMas, exoriMin, exoriIco, exoriCon, exoriAmpKor,
  exoriFlam, exoriFrigo, exoriHur, exoriMort, exoriSan, exoriTera, exoriVis,
  exoriMoeIco, exoriMasSan, exevoVisLux, exevoFrigoHur,
  exevoGranMasFlam, exevoGranMasFrigo, exevoGranMasVis,
  exevoMasSan, exevoTempoMasSan, exevoUlusTera, exura
];

const supportSpells: Spell[] = [
  utaniHur, utura, autoLoot, wealthDuplex, utitoTempo, utamoTempo,
  xpBoost, utoriKor, utoriPox, utoriSan, utoriMort, utevoRes
];

const ultimateSpells: Spell[] = [
  utevoGranRes, exoriGranCon, exoriGranTera, exoriGranFlam,
  utoriGranKor, utoriGranPox, utoriGranSan, utoriGranMort,
  exoriGranMoeIco, exoriGranIco, exoriGranMort, exoriGranAmpKor,
  exoriGranSan, exoriGranFrigo, exoriGranHur, exoriGranVis,
  exevoGranVisLux, exevoGranFrigoHur, exoriGranMin, exoriGran,
  exevoGranUlusTera, exoriGranMas, exoriGranMasSan, exevoGranMasSan,
  exevoTempoGranMasSan, exevoUltraMasFrigo, exevoUltraMasVis, exevoUltraMasFlam
];

const getSpellImage = (iconPath: string) => {
  const fileName = iconPath.split('/').pop()?.replace('.png', '');
  try {
    return new URL(`../assets/images/spells/${fileName}.png`, import.meta.url).href;
  } catch {
    return "/placeholder.svg";
  }
};

const getElementColor = (element?: string) => {
  const colors: Record<string, string> = {
    PHYSICAL: "bg-gray-500",
    FIRE: "bg-red-500",
    ICE: "bg-blue-400",
    ENERGY: "bg-purple-500",
    EARTH: "bg-green-600",
    HOLY: "bg-yellow-400",
    DEATH: "bg-gray-800"
  };
  return element ? colors[element] || "bg-gray-500" : "bg-gray-500";
};

const SpellCard = ({ spell, showPrerequisites = false }: { spell: Spell; showPrerequisites?: boolean }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader>
      <div className="flex items-start gap-4">
        <img
          src={getSpellImage(spell.iconPath)}
          alt={spell.name}
          className="w-16 h-16 object-contain"
        />
        <div className="flex-1">
          <CardTitle className="text-xl">{spell.name}</CardTitle>
          <CardDescription className="mt-1">
            <div className="flex flex-wrap gap-2 mt-2">
              {spell.vocations.map((voc) => (
                <Badge key={voc} variant="outline">{voc}</Badge>
              ))}
            </div>
          </CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="font-semibold">Type:</span> {spell.type}
          </div>
          {spell.elementType && (
            <div className="flex items-center gap-2">
              <span className="font-semibold">Element:</span>
              <div className={`w-3 h-3 rounded-full ${getElementColor(spell.elementType)}`} />
              {spell.elementType}
            </div>
          )}
          {spell.baseDamage && (
            <div>
              <span className="font-semibold">Damage:</span> {spell.minDamage}-{spell.baseDamage}
            </div>
          )}
          {spell.cooldown !== undefined && (
            <div>
              <span className="font-semibold">Cooldown:</span> {spell.cooldown}s
            </div>
          )}
        </div>

        {showPrerequisites && spell.prerequisites && spell.prerequisites.length > 0 && (
          <>
            <Separator />
            <div>
              <p className="font-semibold text-sm mb-2">Prerequisites (Combo):</p>
              <div className="flex flex-wrap gap-2">
                {spell.prerequisites.map((prereq, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {prereq}
                  </Badge>
                ))}
              </div>
            </div>
          </>
        )}

        {spell.powerUp && (
          <>
            <Separator />
            <div>
              <p className="font-semibold text-sm mb-2">Power Up Effects:</p>
              <div className="space-y-1 text-xs">
                {spell.powerUp.stars.map((star) => (
                  <div key={star.star} className="flex gap-2">
                    <span className="text-yellow-500">★{star.star}:</span>
                    <span className="text-muted-foreground">{star.message.en}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </CardContent>
  </Card>
);

export default function SpellWiki() {
  const [searchTerm, setSearchTerm] = useState("");

  const filterSpells = (spells: Spell[]) =>
    spells.filter((spell) =>
      spell.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      spell.vocations.some(voc => voc.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-center gap-4">
          <Link to="/">
            <Button variant="outline">Items Wiki</Button>
          </Link>
          <Link to="/spells">
            <Button variant="default">Spells Wiki</Button>
          </Link>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Tibia Chronicles Spells Wiki</h1>
          <p className="text-muted-foreground">Complete guide to all spells and abilities</p>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col gap-1 w-full">
            <label className="text-sm font-medium text-muted-foreground">Search</label>
            <Input
              type="text"
              placeholder="Search spells or vocations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="attack" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="attack">Attack Spells</TabsTrigger>
            <TabsTrigger value="support">Support Spells</TabsTrigger>
            <TabsTrigger value="ultimate">Ultimate Spells</TabsTrigger>
          </TabsList>

          <TabsContent value="attack" className="space-y-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filterSpells(baseSpells).map((spell) => (
                <SpellCard key={spell.name} spell={spell} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="support" className="space-y-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filterSpells(supportSpells).map((spell) => (
                <SpellCard key={spell.name} spell={spell} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ultimate" className="space-y-4 mt-6">
            <div className="bg-muted/50 p-4 rounded-lg mb-4">
              <p className="text-sm text-muted-foreground">
                <strong>Ultimate Spells</strong> require specific spell combinations to unlock. 
                Check the prerequisites below each ultimate spell to see which spells you need to learn first.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filterSpells(ultimateSpells).map((spell) => (
                <SpellCard key={spell.name} spell={spell} showPrerequisites />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
