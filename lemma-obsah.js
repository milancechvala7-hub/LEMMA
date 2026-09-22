/* Záloha obsahu aplikácie LEMMA V14. Uložte tento súbor vedľa HTML aplikácie. */
window.LEMMA_CONTENT_BACKUP = {
  "format": "lemma-blocks",
  "version": 3,
  "schema": "lemma-blocks-v3",
  "activeCourseId": "kurz-algebraicke-zaklady-a-uprava-vyrazov",
  "activeId": "zakladne-matematicke-pojmy-hierarchia",
  "courses": [
    {
      "id": "kurz-algebraicke-zaklady-a-uprava-vyrazov",
      "title": "Algebraické základy a úprava výrazov",
      "description": "Číselné množiny, algebraické výrazy, rovnice, nerovnice a bezpečné úpravy.",
      "icon": "π",
      "custom": true,
      "lessonIds": [
        "zakladne-matematicke-pojmy-hierarchia",
        "uprava-vyrazov-zakladne-pravidla",
        "narocne-upravy-suciny-a-zatvorky",
        "lomene-vyrazy-mocniny-a-odmocniny",
        "mnoziny-podmienky-a-bezpecne-upravy-rovnic",
        "linearne-rovnice-a-skuska",
        "kvadraticke-rovnice-metody",
        "nelinearne-rovnice-a-podmienky",
        "nerovnice-a-znamenkova-tabulka",
        "kvadraticke-a-racionalne-nerovnice",
        "finalne-cvicenie-vsetky-priklady"
      ]
    },
    {
      "id": "kurz-derivacie-doucko-2",
      "title": "Derivácie krok za krokom",
      "description": "Kurz vysvetľuje deriváciu od významu zmeny a sklonu grafu cez mocninové, exponenciálne a goniometrické funkcie až po reťazové pravidlo, mocniny, odmocniny, súčin a podiel funkcií. Dôraz je na správne rozpoznanie štruktúry výrazu, definičných podmienok a na kontrolu jednotlivých krokov.",
      "icon": "∫",
      "custom": true,
      "lessonIds": [
        "derivacie-01-funkcia-a-zmena-2",
        "derivacie-02-zmena-na-prikladoch-2",
        "derivacie-03-mocniny-a-konstanty-2",
        "derivacie-04-exponencialy-a-trigonometria-2",
        "derivacie-05-retazove-pravidlo-2",
        "derivacie-06-retazove-pravidlo-vrstvy",
        "derivacie-07-mocniny-odmocniny-zapis",
        "derivacie-08-sucin-a-podiel-2"
      ]
    }
  ],
  "lessons": [
    {
      "id": "zakladne-matematicke-pojmy-hierarchia",
      "courseId": "kurz-algebraicke-zaklady-a-uprava-vyrazov",
      "title": "Základné matematické pojmy: od rovnice k činiteľu",
      "custom": true,
      "maxScore": 6,
      "blocks": [
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Ako rozoznáme rovnicu, výraz, člen a činiteľ v jednom zložitom zápise?"
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Al-Chvárizmí a zrod slova algebra"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Muhammad al-Chvárizmí napísal okolo roku 820 knihu o systematickom riešení rovníc. Slovo al-džabr z jej názvu dalo vzniknúť slovu algebra. Rovnice zapisoval slovami, nie dnešnými symbolmi, no jasne rozlišoval typy úloh a prípustné kroky ich riešenia. Na stole by vtedy neležal hotový vzorec, iba údaje a otázka, ktorú bolo treba rozhodnúť. Užitočný nápad vzniká vtedy, keď sa neurčité slová nahradia meraním: zmeníš jednu hodnotu, sleduješ následok a porovnáš ho s ďalším prípadom."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. Rovnica"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Matematický zápis budeme čítať "
            },
            {
              "type": "text",
              "text": "od najvyššej úrovne k najnižšej",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": ". Ako hlavný príklad použijeme jednu rovnicu:"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\frac{2(x-3)(x+1)}{x+2}+3x^2-5x+1=7x-4",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Rovnica:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Celý zápis má tvar "
            },
            {
              "type": "formula",
              "tex": "L(x)=P(x)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", teda "
            },
            {
              "type": "text",
              "text": "výraz = výraz",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": ". Preto je to "
            },
            {
              "type": "text",
              "text": "rovnica",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": ". \n"
            },
            {
              "type": "text",
              "text": "Výraz:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Ľavá strana je "
            },
            {
              "type": "text",
              "text": "výraz ",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "formula",
              "tex": "L(x)=\\frac{2(x-3)(x+1)}{x+2}+3x^2-5x+1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a pravá strana je "
            },
            {
              "type": "text",
              "text": "výraz ",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "formula",
              "tex": "P(x)=7x-4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". \n"
            },
            {
              "type": "text",
              "text": "Neznáma: ",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": "je "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; riešením alebo "
            },
            {
              "type": "text",
              "text": "koreňom ",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": "rovnice je každá prípustná hodnota, pri ktorej sa obe strany rovnajú."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Podmienky:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " sú pravidlá, ktoré určujú, ktoré hodnoty sú povolené a ktoré nie.\n"
            },
            {
              "type": "text",
              "text": "Definičný obor:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " je množina všetkých hodnôt, ktoré môže mať neznáma, aby mal výraz alebo funkcia zmysel.\n"
            },
            {
              "type": "text",
              "text": "Základný obor:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " je \nU\n=\nR čiže množina všetých reálnych čísel. Pri zlomkoch, odmocninách a ďalších obmedzeniach sa navyše zapisuje podmienka \nP\n.\n"
            },
            {
              "type": "formula",
              "tex": "\\begin{array}{|l|c|c|c|} \\text{Delenie nulou} & \\displaystyle\\frac{5}{x-3} & x-3\\neq0\\Rightarrow x\\neq3 & D=\\mathbb{R}\\setminus\\{3\\} \\\\ \\hline \\text{Párna odmocnina} & \\sqrt{2x-6} & 2x-6\\geq0\\Rightarrow x\\geq3 & D=\\{x\\in\\mathbb{R}\\mid x\\geq3\\} \\\\ \\hline \\text{Odmocnina v menovateli} & \\displaystyle\\frac{1}{\\sqrt{x-4}} & x-4>0\\Rightarrow x>4 & D=\\{x\\in\\mathbb{R}\\mid x>4\\} \\\\ \\hline \\text{Logaritmus} & \\log(x+2) & x+2>0\\Rightarrow x>-2 & D=\\{x\\in\\mathbb{R}\\mid x>-2\\} \\\\ \\hline \\text{Logaritmus so základom} & \\log_a(x) & x>0,\\ a>0,\\ a\\neq1 & D=\\{x\\in\\mathbb{R}\\mid x>0\\} \\\\ \\hline \\text{Tangens} & \\displaystyle\\tan(x)=\\frac{\\sin(x)}{\\cos(x)} & \\displaystyle x\\neq\\frac{\\pi}{2}+k\\pi & \\displaystyle D=\\mathbb{R}\\setminus \\left\\{\\frac{\\pi}{2}+k\\pi\\mid k\\in\\mathbb{Z}\\right\\} \\\\ \\hline \\text{Kotangens} & \\displaystyle\\cot(x)=\\frac{\\cos(x)}{\\sin(x)} & x\\neq k\\pi & \\displaystyle D=\\mathbb{R}\\setminus \\left\\{k\\pi\\mid k\\in\\mathbb{Z}\\right\\} \\\\ \\hline \\text{Arkus sínus} & \\arcsin(2x-1) & -1\\leq2x-1\\leq1 & D=\\{x\\in\\mathbb{R}\\mid0\\leq x\\leq1\\} \\\\ \\hline \\text{Arkus kosínus} & \\arccos(3x) & -1\\leq3x\\leq1 & \\displaystyle D= \\left\\{x\\in\\mathbb{R}\\mid-\\frac{1}{3}\\leq x\\leq\\frac{1}{3}\\right\\} \\\\ \\hline \\text{Racionálny exponent, párny menovateľ} & \\displaystyle(x-2)^{\\frac{1}{2}} & x-2\\geq0\\Rightarrow x\\geq2 & D=\\{x\\in\\mathbb{R}\\mid x\\geq2\\} \\\\ \\hline \\text{Racionálny exponent, nepárny menovateľ} & \\displaystyle(x-2)^{\\frac{1}{3}} & x\\in\\mathbb{R} & D=\\mathbb{R} \\\\ \\hline \\text{Záporný exponent} & \\displaystyle(x+1)^{-2} & x+1\\neq0\\Rightarrow x\\neq-1 & D=\\mathbb{R}\\setminus\\{-1\\} \\\\ \\hline \\end{array}",
              "display": "inline",
              "tts": false
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. Výrazy a ich členy"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Výraz je matematický zápis bez hlavného znaku rovnosti. Členy sú časti oddelené sčítaním alebo odčítaním. Ľavý výraz môžeme hierarchicky rozložiť:"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "L(x)=\\underbrace{\\frac{2(x-3)(x+1)}{x+2}}_{\\text{1. člen}}+\\underbrace{3x^2}_{\\text{2. člen}}-\\underbrace{5x}_{\\text{3. člen}}+\\underbrace{1}_{\\text{4. člen}}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "V člene "
            },
            {
              "type": "formula",
              "tex": "3x^2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je číslo "
            },
            {
              "type": "formula",
              "tex": "3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " "
            },
            {
              "type": "text",
              "text": "koeficient",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": ", "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je "
            },
            {
              "type": "text",
              "text": "premenná",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": ", "
            },
            {
              "type": "formula",
              "tex": "2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je "
            },
            {
              "type": "text",
              "text": "exponent",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " a "
            },
            {
              "type": "formula",
              "tex": "x^2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je mocnina. Číslo bez premennej, napríklad "
            },
            {
              "type": "formula",
              "tex": "1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", je "
            },
            {
              "type": "text",
              "text": "konštantný alebo absolútny člen",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. Súčin, činitele a zlomok"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "V čitateli "
            },
            {
              "type": "formula",
              "tex": "2(x-3)(x+1)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " sú činitele "
            },
            {
              "type": "formula",
              "tex": "2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", "
            },
            {
              "type": "formula",
              "tex": "(x-3)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a "
            },
            {
              "type": "formula",
              "tex": "(x+1)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Celý zápis "
            },
            {
              "type": "formula",
              "tex": "\\frac{2(x-3)(x+1)}{x+2}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je podiel: horná časť je "
            },
            {
              "type": "text",
              "text": "čitateľ",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": ", dolná časť "
            },
            {
              "type": "formula",
              "tex": "x+2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je "
            },
            {
              "type": "text",
              "text": "menovateľ",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": ". Menovateľ nesmie byť nula, preto platí podmienka "
            },
            {
              "type": "formula",
              "tex": "x\\ne-2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "4. Typ rovnice podľa tvaru"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "text",
              "text": "Lineárna:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " po úprave "
            },
            {
              "type": "formula",
              "tex": "ax+b=0,\\ a\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "text",
              "text": "Kvadratická:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " "
            },
            {
              "type": "formula",
              "tex": "ax^2+bx+c=0,\\ a\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "text",
              "text": "Kubická:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " "
            },
            {
              "type": "formula",
              "tex": "ax^3+bx^2+cx+d=0,\\ a\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "text",
              "text": "Polynomiálna:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " "
            },
            {
              "type": "formula",
              "tex": "P(x)=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "text",
              "text": "Racionálna:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " neznáma sa nachádza v menovateli, napríklad "
            },
            {
              "type": "formula",
              "tex": "\\frac{x+1}{x-2}=3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " s podmienkou "
            },
            {
              "type": "formula",
              "tex": "x\\ne2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "text",
              "text": "Iracionálna:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " neznáma je pod odmocninou, napríklad "
            },
            {
              "type": "formula",
              "tex": "\\sqrt{x+1}=x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "text",
              "text": "Exponenciálna:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " neznáma je v exponente, napríklad "
            },
            {
              "type": "formula",
              "tex": "2^x=8",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "text",
              "text": "Logaritmická:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " obsahuje logaritmus neznámeho výrazu, napríklad "
            },
            {
              "type": "formula",
              "tex": "\\log(x-1)=2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " s "
            },
            {
              "type": "formula",
              "tex": "x>1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "text",
              "text": "Trigonometrická:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " obsahuje napríklad "
            },
            {
              "type": "formula",
              "tex": "\\sin x,\\cos x,\\tan x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "text",
              "text": "S absolútnou hodnotou:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " napríklad "
            },
            {
              "type": "formula",
              "tex": "|2x-1|=5",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; obyčajne sa rieši rozdelením na prípady."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "text",
              "text": "Lineárna nerovnica:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " napríklad "
            },
            {
              "type": "formula",
              "tex": "2x-3>5",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; namiesto rovnosti obsahuje znak nerovnosti."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "text",
              "text": "Kvadratická nerovnica:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " napríklad "
            },
            {
              "type": "formula",
              "tex": "x^2-5x+6\\le0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Aký typ rovnice je toto?"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "x^2+3x=x(x+2)",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Na prvý pohľad sa to javí ako kvadratická rovnica ale v skutočnosti sa jedná o "
            },
            {
              "type": "text",
              "text": "lineárnu rovnicu",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": ".\nNiekedy sa na jednoducho nedá určiť, aký typ rovnice máme, pretože jej skutočný tvar môže byť skrytý za úpravami"
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Úlohy na precvičenie"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. V rovnici "
            },
            {
              "type": "formula",
              "tex": "4(x-2)+\\frac{x+1}{x-3}=9",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " pomenujte ľavú stranu, pravú stranu, členy, čitateľa, menovateľa a podmienku."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. Určte typ rovnice: "
            },
            {
              "type": "formula",
              "tex": "5x-7=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", "
            },
            {
              "type": "formula",
              "tex": "x^2+4x+1=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", "
            },
            {
              "type": "formula",
              "tex": "\\frac1{x-2}=3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", "
            },
            {
              "type": "formula",
              "tex": "\\sqrt{x}=x-2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. Rozhodnite, či je zápis "
            },
            {
              "type": "formula",
              "tex": "3x^2-5x+2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " výraz, rovnica alebo nerovnica."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zobraziť výsledky a postupy"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. Ľavý výraz je "
            },
            {
              "type": "formula",
              "tex": "4(x-2)+\\frac{x+1}{x-3}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", pravý výraz je "
            },
            {
              "type": "formula",
              "tex": "9",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; v zlomku je čitateľ "
            },
            {
              "type": "formula",
              "tex": "x+1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", menovateľ "
            },
            {
              "type": "formula",
              "tex": "x-3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a podmienka "
            },
            {
              "type": "formula",
              "tex": "x\\ne3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. Postupne: lineárna, kvadratická, racionálna, iracionálna rovnica."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. Je to výraz, pretože neobsahuje znak rovnosti ani nerovnosti."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "V rozvinutom výraze sú členy časti spojené sčítaním alebo odčítaním na najvyššej úrovni zápisu. Činitele sú časti spojené násobením. Pri kubickej rovnici "
            },
            {
              "type": "formula",
              "tex": "ax^3+bx^2+cx+d=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " musí platiť "
            },
            {
              "type": "formula",
              "tex": "a\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Typ rovnice určujeme podľa matematicky upraveného vzťahu, ale zároveň evidujeme obmedzenia pôvodného zápisu. Rovnica so zlomkami sa po úprave môže zmeniť na lineárnu, no zakázané hodnoty z pôvodných menovateľov zostávajú zakázané."
            }
          ]
        },
        {
          "type": "test",
          "title": "Krátky test: Základné matematické pojmy: od rovnice k činiteľu",
          "source": "# Krátky test: Základné matematické pojmy: od rovnice k činiteľu\n\n[ABCD]\nČo predstavuje celý zápis „výraz = výraz“?\n* Rovnicu\n- Jeden člen\n- Jeden činiteľ\n- Menovateľ\n\n[ABCD]\nAko sa nazývajú časti súčinu?\n* Činitele\n- Členy\n- Korene\n- Intervaly\n\n[ABCD]\nKtorá podmienka platí pre menovateľ?\n* Nesmie sa rovnať nule\n- Musí byť kladný\n- Musí byť celé číslo\n- Musí sa rovnať čitateľu\n\n[ABCD]\nAký tvar má kvadratická rovnica?\n* ax² + bx + c = 0, a ≠ 0\n- ax + b = 0\n- a/x = 0\n- ax³ + b = 0\n",
          "maxScore": 4,
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zapamätaj si"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Rovnica: Celok v tvare výraz = výraz; riešenie musí spĺňať rovnosť aj všetky definičné podmienky."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Výraz: Časť rovnice bez hlavného znaku rovnosti. Výraz sa skladá z členov a členy môžu obsahovať činitele."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Zlomok: Má čitateľa a menovateľa; menovateľ nesmie byť nulový."
            }
          ]
        }
      ],
      "eyebrow": "Lekcia 1 z 11",
      "revision": "objavna-verzia-4"
    },
    {
      "id": "uprava-vyrazov-zakladne-pravidla",
      "courseId": "kurz-algebraicke-zaklady-a-uprava-vyrazov",
      "title": "Úprava výrazov: členy, znamienka a zátvorky",
      "custom": true,
      "maxScore": 6,
      "blocks": [
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Ktoré členy môžeme spojiť bez toho, aby sme zmenili hodnotu výrazu?"
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Viète zaviedol písmená do všeobecnej algebry"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "François Viète v 16. storočí systematicky používal písmená nielen pre neznáme, ale aj pre známe parametre. Vďaka tomu bolo možné zapisovať všeobecné pravidlá namiesto riešenia každého číselného príkladu osobitne. Úprava výrazov sa stala prácou so štruktúrou, nie iba s konkrétnymi číslami."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Predstav si túto situáciu ako krátke vyšetrovanie. Máš tvrdenie, ktoré môže byť pravdivé aj klamlivé, a potrebuješ dôkaz. Jedno nastavenie grafu nestačí, pretože môže ísť o náhodu. Zmeníš parameter, odmeriaš výsledok a potom zámerne vyhľadáš hraničný prípad. Interaktívna úloha ti pridelí bod iba vtedy, keď podmienku naozaj splníš. Tým sa z pozorovania stane overiteľný matematický argument. Ktoré členy môžeme spojiť bez toho, aby sme zmenili hodnotu výrazu? Po úspechu si výsledok obháj jednou vetou a porovnaj ho s pôvodným odhadom, nie iba so zeleným potvrdením."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Úprava výrazu znamená nahradiť ho ekvivalentným, zvyčajne jednoduchším výrazom. Základom sú "
            },
            {
              "type": "text",
              "text": "poradie operácií",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": ", správne odstránenie zátvoriek a spájanie podobných členov."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Poradie operácií"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. zátvorky,"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. mocniny a odmocniny,"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. násobenie a delenie,"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "4. sčítanie a odčítanie."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Podobné členy majú rovnakú premennú časť s rovnakými exponentmi: "
            },
            {
              "type": "formula",
              "tex": "3x^2-5x^2=-2x^2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Výrazy "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a "
            },
            {
              "type": "formula",
              "tex": "x^2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " podobné nie sú."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Príklad 1: spájanie podobných členov"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}2x^2+3x-5-3x^2-x+2&=(2x^2-3x^2)+(3x-x)+(-5+2)\\\\&=-x^2+2x-3.\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Príklad 2: viac premenných"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}7n+3m+2+3n^2+4&=3n^2+7n+3m+(2+4)\\\\&=3n^2+7n+3m+6.\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Členy "
            },
            {
              "type": "formula",
              "tex": "7n",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a "
            },
            {
              "type": "formula",
              "tex": "3m",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " nemožno spojiť, pretože majú inú premennú časť."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Príklad 3: vnorené zátvorky"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zápis interpretujeme s uzavretou vonkajšou zátvorkou:"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}2a-[b-(5a+2b-c)+(2a+b-3c)]&=2a-[b-5a-2b+c+2a+b-3c]\\\\&=2a-[-3a-2c]\\\\&=5a+2c.\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Ak je pred zátvorkou mínus, znamienko sa zmení pri "
            },
            {
              "type": "text",
              "text": "každom",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " člene: "
            },
            {
              "type": "formula",
              "tex": "-(u-v+w)=-u+v-w",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Príklad 4: dlhší výraz"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}&-R^2S+15RS^2-\\left(-5R^2S^2-R^2S-8RS+18RS^2\\right)\\\\&=-R^2S+15RS^2+5R^2S^2+R^2S+8RS-18RS^2\\\\&=5R^2S^2-3RS^2+8RS\\\\&=RS(5RS-3S+8).\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Bezpečný algoritmus pre vnorené zátvorky"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. Začnite najvnútornejšou zátvorkou."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. Pred odstránením zátvorky si označte znamienko alebo činiteľ pred ňou."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. Ak je pred zátvorkou mínus, zmeňte znamienko "
            },
            {
              "type": "text",
              "text": "každého",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " člena."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "4. Podobné členy spájajte až po správnom odstránení zátvoriek."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "5. Výsledok zoraďte zostupne podľa stupňa; pri viacerých premenných zvoľte jedno konzistentné poradie."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "3x-\\left[2-\\left(x-3(2x-1)\\right)\\right]+2(1-x)",
          "display": "block",
          "tts": false
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}\n3(2x-1)&=6x-3,\\\\\nx-(6x-3)&=-5x+3,\\\\\n2-(-5x+3)&=5x-1,\\\\\n3x-(5x-1)+2(1-x)&=3x-5x+1+2-2x\\\\\n&=-4x+3.\n\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Mínus a mocnina nie sú to isté"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\qquad (-x)^2=x^2",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Štandardný tvar výrazu"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri jednej premennej zoraďujeme členy od najvyššieho exponentu po konštantu:"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "7-2x+x^4+3x^2=x^4+3x^2-2x+7",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Toto zoradenie nemení hodnotu výrazu; iba zvyšuje prehľadnosť a uľahčuje určenie stupňa, vedúceho člena a porovnanie dvoch polynómov."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Úlohy na precvičenie"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. Upravte "
            },
            {
              "type": "formula",
              "tex": "8x^2-3x+4-5x^2+7x-9",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. Upravte "
            },
            {
              "type": "formula",
              "tex": "4a-[2a-(3a-b)+2b]",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. Vyberte spoločný činiteľ z "
            },
            {
              "type": "formula",
              "tex": "12x^3y-8x^2y^2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zobraziť výsledky a postupy"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. "
            },
            {
              "type": "formula",
              "tex": "3x^2+4x-5",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. "
            },
            {
              "type": "formula",
              "tex": "4a-[2a-3a+b+2b]=4a-[-a+3b]=5a-3b",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. "
            },
            {
              "type": "formula",
              "tex": "4x^2y(3x-2y)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pred zátvorkou platí "
            },
            {
              "type": "formula",
              "tex": "-(a-b)=-a+b",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Napríklad "
            },
            {
              "type": "formula",
              "tex": "-(2x-3)=-2x+3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", nie "
            },
            {
              "type": "formula",
              "tex": "-2x-3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Pri dvoch záporných zátvorkách postupuj po jednej a až potom spájaj podobné členy."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Dva výrazy sú ekvivalentné na svojom spoločnom definičnom obore. Úprava nesmie potichu pridať hodnotu, pri ktorej pôvodný výraz neexistoval."
            }
          ]
        },
        {
          "type": "test",
          "title": "Krátky test: Úprava výrazov: členy, znamienka a zátvorky",
          "source": "# Krátky test: Úprava výrazov: členy, znamienka a zátvorky\n\n[ABCD]\nKtoré členy sú podobné?\n* 3x² a −5x²\n- 3x² a 3x\n- x a y\n- x² a xy\n\n[ABCD]\nČo sa stane so znamienkami po odstránení mínusu pred zátvorkou?\n* Zmenia sa pri všetkých členoch\n- Nezmenia sa\n- Zmení sa iba prvé\n- Zmenia sa iba pri konštantách\n\n[ABCD]\nAký je výsledok 2x + 5x?\n* 7x\n- 7x²\n- 10x\n- 7\n\n[ABCD]\nMožno spojiť 4a a 3b?\n* Nie, majú inú premennú časť\n- Áno, výsledok je 7ab\n- Áno, výsledok je 7a\n- Áno, výsledok je 12ab\n",
          "maxScore": 4,
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "instruction",
          "tts": false,
          "content": [
            {
              "type": "text",
              "text": "Vráť sa k prvému odhadu:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": "Zmenil sa po splnení bodovaných úloh? Uveď jednu konkrétnu hodnotu, polohu bodu alebo vlastnosť grafu, ktorá tvoje rozhodnutie podopiera."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zapamätaj si"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Podobné členy: Majú rovnaké premenné aj exponenty; sčítavajú sa iba ich koeficienty."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Mínus pred zátvorkou: Zmení znamienko každého člena v zátvorke."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Kontrola: Po úprave možno dosadiť niekoľko hodnôt a porovnať pôvodný a výsledný výraz."
            }
          ]
        }
      ],
      "eyebrow": "Lekcia 2 z 11",
      "revision": "objavna-verzia-4"
    },
    {
      "id": "narocne-upravy-suciny-a-zatvorky",
      "courseId": "kurz-algebraicke-zaklady-a-uprava-vyrazov",
      "title": "Náročné úpravy: súčiny a roznásobovanie",
      "custom": true,
      "maxScore": 6,
      "blocks": [
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Ako roznásobiť viac zátvoriek bez straty znamienka alebo člena?"
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Algoritmy putovali z Indie cez arabský svet do Európy"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Mnohé písomné algoritmy násobenia a práce s číslami sa do stredovekej Európy dostali cez arabské matematické texty. Fibonacci ich popularizoval v knihe Liber Abaci z roku 1202. Dnešné roznásobovanie zátvoriek je symbolickou verziou tej istej distributívnej myšlienky."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Historický krok bol dôležitý najmä preto, že premenil obraz na postup, ktorý sa dal zopakovať. Aj ty začneš bez hotového pravidla. Skús si vopred predstaviť výsledok, potom upravuj iba tie veličiny, ktoré sú v modeli voľné, a sleduj pomenované čísla alebo polohy. Úloha je nastavená tak, aby nestačilo trafiť jednu očividnú hodnotu; musíš skombinovať viac podmienok a skontrolovať, či výsledný obraz dáva zmysel. Ako roznásobiť viac zátvoriek bez straty znamienka alebo člena? Po úspechu si výsledok obháj jednou vetou a porovnaj ho s pôvodným odhadom, nie iba so zeleným potvrdením."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "instruction",
          "tts": false,
          "content": [
            {
              "type": "text",
              "text": "Najprv si tipni:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": "Nastav korene tak, aby ich súčet bol 1 a súčin −6. Zapíš si odhad skôr, než pohneš prvým ovládačom."
            }
          ]
        },
        {
          "type": "geogebra",
          "title": "Súčin dvoch lineárnych činiteľov",
          "app": "graphing",
          "bounds": [
            -7,
            7,
            -10,
            12
          ],
          "commands": [
            "p=-2",
            "q=3",
            "f(x)=(x-p)*(x-q)",
            "P=(p,0)",
            "Q=(q,0)",
            "sumRoots=p+q",
            "productRoots=p*q"
          ],
          "controls": [
            [
              "p",
              -5,
              5,
              0.5,
              -2
            ],
            [
              "q",
              -5,
              5,
              0.5,
              3
            ]
          ],
          "tasks": [
            {
              "text": "Nastav korene tak, aby ich súčet bol 1 a súčin −6.",
              "condition": "sumRoots>0.99 && sumRoots<1.01 && productRoots>-6.01 && productRoots<-5.99"
            },
            {
              "text": "Vytvor dvojnásobný koreň v bode x=2.",
              "condition": "p>1.99 && p<2.01 && q>1.99 && q<2.01"
            }
          ],
          "expected": [],
          "colors": {
            "f": [
              29,
              78,
              216
            ],
            "P": [
              220,
              38,
              38
            ],
            "Q": [
              22,
              163,
              74
            ]
          },
          "fill": {},
          "open": [],
          "preserveStyle": true,
          "toolbar": true,
          "maxScore": 2,
          "tts": false,
          "interactionModel": "bodovana-graficka-uloha"
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Obor a podmienky:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Ak pri konkrétnom príklade nie je napísané inak, základný obor je "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Pri zlomkoch, odmocninách a ďalších obmedzeniach sa navyše zapisuje podmienka "
            },
            {
              "type": "formula",
              "tex": "P",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; riešenie musí patriť do oboru aj spĺňať všetky podmienky."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri násobení používame distributívny zákon "
            },
            {
              "type": "formula",
              "tex": "k(a+b)=ka+kb",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Pri súčine viacerých jednočlenov násobíme koeficienty a exponenty rovnakých premenných sčítame."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Príklad 5: súčin jednočlenov"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}(-2ax)(-3ax)(-xY^2)&=(-2)(-3)(-1)\\,a^2x^3Y^2\\\\&=-6a^2x^3Y^2.\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Príklad 6: jednočlen krát dvojčlen"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "4xY(2x+3Y)=8x^2Y+12xY^2.",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Príklad 7: dvojčlen krát dvojčlen"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}(2xY+Y^2)(x^2-2xY)&=2x^3Y-4x^2Y^2+x^2Y^2-2xY^3\\\\&=2x^3Y-3x^2Y^2-2xY^3.\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Príklad 8: trojčlen krát trojčlen"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "(x^2+x+1)(x^2+x+2)=x^4+2x^3+4x^2+3x+2.",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Rýchla kontrola posledného príkladu: položme "
            },
            {
              "type": "formula",
              "tex": "t=x^2+x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Potom "
            },
            {
              "type": "formula",
              "tex": "(t+1)(t+2)=t^2+3t+2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; po spätnom dosadení dostaneme ten istý polynóm."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Užitočné vzorce"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}(a+b)^2&=a^2+2ab+b^2,\\\\(a-b)^2&=a^2-2ab+b^2,\\\\a^2-b^2&=(a-b)(a+b),\\\\a^3-b^3&=(a-b)(a^2+ab+b^2).\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Rozšírenie: násobenie troch a viacerých zátvoriek"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri troch zátvorkách násobíme "
            },
            {
              "type": "text",
              "text": "postupne po dvojiciach",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": ". Násobenie je asociatívne, preto môžeme zvoliť výhodné zoskupenie:"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "A\\cdot B\\cdot C=(A\\cdot B)\\cdot C=A\\cdot(B\\cdot C)",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zanikne prvá zátvorka?",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Po roznásobení prvých dvoch zátvoriek ich súčin nahradíme jedným polynómom. Keď ho však ešte násobíme treťou zátvorkou, nový polynóm musí zostať chápaný ako jeden celok. Preto je bezpečné zátvorku ponechať:"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "(x-1)(x+2)(x-3)=\\underbrace{(x^2+x-2)}_{\\text{súčin prvých dvoch zátvoriek}}(x-3)",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Samotný zápis "
            },
            {
              "type": "formula",
              "tex": "x^2+x-2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " už vnútorné zátvorky nepotrebuje. Vonkajšia zátvorka však ukazuje, že "
            },
            {
              "type": "text",
              "text": "každý jeho člen",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " musíme vynásobiť každým členom tretej zátvorky."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}\n(x^2+x-2)(x-3)\n&=x^2\\cdot x+x^2(-3)+x\\cdot x+x(-3)-2x+6\\\\\n&=x^3-3x^2+x^2-3x-2x+6\\\\\n&=x^3-2x^2-5x+6.\n\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Podmienky:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " ide o polynomiálny výraz, preto "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a nevzniká žiadna dodatočná definičná podmienka."
            }
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Výber výhodného poradia"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Niekedy je rýchlejšie najskôr vynásobiť zátvorky, ktoré vytvoria známy vzorec:"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}\n(x+1)(x-1)(x^2+1)\n&=(x^2-1)(x^2+1)\\\\\n&=x^4-1.\n\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Tu sme dvakrát použili rozdiel štvorcov. Výsledok je rovnaký bez ohľadu na poradie, ale vhodné zoskupenie znižuje počet medzikrokov."
            }
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zložitejší príklad s tromi rôznymi zátvorkami"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}\n(2x-3)(x+4)(x^2-x+2)\n&=(2x^2+5x-12)(x^2-x+2)\\\\\n&=2x^4-2x^3+4x^2+5x^3-5x^2+10x\\\\\n&\\quad-12x^2+12x-24\\\\\n&=2x^4+3x^3-13x^2+22x-24.\n\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "V druhom kroku sme "
            },
            {
              "type": "text",
              "text": "každý z troch členov",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " polynómu "
            },
            {
              "type": "formula",
              "tex": "2x^2+5x-12",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " vynásobili "
            },
            {
              "type": "text",
              "text": "každým z troch členov",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " polynómu "
            },
            {
              "type": "formula",
              "tex": "x^2-x+2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Pomáha zapisovať medzivýsledky do samostatných riadkov."
            }
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Všeobecný počet čiastkových súčinov"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Ak majú tri zátvorky po dva členy, vznikne pred spojením podobných členov "
            },
            {
              "type": "formula",
              "tex": "2\\cdot2\\cdot2=8",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " čiastkových súčinov:"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}\n(a+b)(c+d)(e+f)\n={}&ace+acf+ade+adf\\\\\n&+bce+bcf+bde+bdf.\n\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Najčastejšie chyby"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "text",
              "text": "Zabudnutý člen:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " tretia zátvorka musí násobiť celý predchádzajúci výsledok, nie iba jeho posledný člen."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "text",
              "text": "Predčasné odstránenie zoskupenia:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " zápis "
            },
            {
              "type": "formula",
              "tex": "(x^2+x-2)(x-3)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " nemožno zmeniť na "
            },
            {
              "type": "formula",
              "tex": "x^2+x-2x-3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "text",
              "text": "Nesprávne znamienka:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " pri násobení záporného člena používame pravidlá znamienok pri každom čiastkovom súčine."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "text",
              "text": "Nesprávne spájanie:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " spojiť možno iba podobné členy, napríklad "
            },
            {
              "type": "formula",
              "tex": "3x^2-5x^2=-2x^2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", nie "
            },
            {
              "type": "formula",
              "tex": "3x^2-5x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "text",
              "text": "Kontrola stupňa:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " súčin stupňov "
            },
            {
              "type": "formula",
              "tex": "1,1,2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " má mať stupeň "
            },
            {
              "type": "formula",
              "tex": "1+1+2=4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", ak sa vedúce členy nevynulujú."
            }
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Rozšírené cvičenia"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. Roznásobte "
            },
            {
              "type": "formula",
              "tex": "(x-2)(x+1)(x+3)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. Roznásobte "
            },
            {
              "type": "formula",
              "tex": "(2x+1)(x-2)(x^2+3)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. Využite vzorce: "
            },
            {
              "type": "formula",
              "tex": "(a-b)(a+b)(a^2+b^2)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "4. Nájdite chybu v úprave "
            },
            {
              "type": "formula",
              "tex": "(x+1)(x+2)(x+3)=(x^2+3x+2)x+3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zobraziť výsledky rozšírených cvičení"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. "
            },
            {
              "type": "formula",
              "tex": "x^3+2x^2-5x-6",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. "
            },
            {
              "type": "formula",
              "tex": "2x^4-3x^3+4x^2-9x-6",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. "
            },
            {
              "type": "formula",
              "tex": "a^4-b^4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "4. Po vynásobení prvých dvoch zátvoriek musí tretia zátvorka násobiť "
            },
            {
              "type": "text",
              "text": "celý",
              "marks": [
                "italic"
              ]
            },
            {
              "type": "text",
              "text": " výsledok: "
            },
            {
              "type": "formula",
              "tex": "(x^2+3x+2)(x+3)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", nie iba člen "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Úlohy na precvičenie"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. Vynásobte "
            },
            {
              "type": "formula",
              "tex": "(-3a^2b)(4ab^3)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. Roznásobte "
            },
            {
              "type": "formula",
              "tex": "5x(2x^2-3x+4)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. Roznásobte "
            },
            {
              "type": "formula",
              "tex": "(x-4)(2x+3)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "4. Použite vzorec na "
            },
            {
              "type": "formula",
              "tex": "(3x-2)^2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zobraziť výsledky a postupy"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. "
            },
            {
              "type": "formula",
              "tex": "-12a^3b^4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. "
            },
            {
              "type": "formula",
              "tex": "10x^3-15x^2+20x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. "
            },
            {
              "type": "formula",
              "tex": "2x^2-5x-12",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "4. "
            },
            {
              "type": "formula",
              "tex": "9x^2-12x+4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri súčine polynómov stupňov "
            },
            {
              "type": "formula",
              "tex": "1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", "
            },
            {
              "type": "formula",
              "tex": "1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a "
            },
            {
              "type": "formula",
              "tex": "2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " očakávame najviac stupeň "
            },
            {
              "type": "formula",
              "tex": "4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", ak sa vedúce členy nevyrušia. Po roznásobení preto skontroluj najvyšší stupeň."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Druhá kontrola je dosadenie jednoduchej hodnoty, napríklad "
            },
            {
              "type": "formula",
              "tex": "x=1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", do pôvodného aj upraveného výrazu. Jedna zhodná hodnota nie je dôkaz identity, ale rýchlo odhalí množstvo chýb v znamienkach."
            }
          ]
        },
        {
          "type": "test",
          "title": "Krátky test: Náročné úpravy: súčiny a roznásobovanie",
          "source": "# Krátky test: Náročné úpravy: súčiny a roznásobovanie\n\n[ABCD]\nAký je výsledok x³ · x⁴?\n* x⁷\n- x¹²\n- 2x⁷\n- x\n\n[ABCD]\nČomu sa rovná (a−b)²?\n* a² − 2ab + b²\n- a² − b²\n- a² + 2ab + b²\n- a² − 2b²\n\n[ABCD]\nPri násobení dvoch dvojčlenov treba:\n* Vynásobiť každý člen prvého každým členom druhého\n- Násobiť iba prvé členy\n- Sčítať exponenty všetkých členov\n- Odstrániť stredné členy\n\n[ABCD]\nAký stupeň má súčin polynómu 2. a 3. stupňa?\n* 5\n- 6\n- 3\n- 2\n",
          "maxScore": 4,
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "instruction",
          "tts": false,
          "content": [
            {
              "type": "text",
              "text": "Vráť sa k prvému odhadu:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": "Zmenil sa po splnení bodovaných úloh? Uveď jednu konkrétnu hodnotu, polohu bodu alebo vlastnosť grafu, ktorá tvoje rozhodnutie podopiera."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zapamätaj si"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Distributívny zákon: Každý člen jednej zátvorky násobíme každým členom druhej."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Mocniny: Pri násobení rovnakých základov exponenty sčítame."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Kontrola stupňa: Súčin polynómov stupňa m a n má pri nenulových vedúcich koeficientoch stupeň m+n."
            }
          ]
        }
      ],
      "eyebrow": "Lekcia 3 z 11",
      "revision": "objavna-verzia-4"
    },
    {
      "id": "lomene-vyrazy-mocniny-a-odmocniny",
      "courseId": "kurz-algebraicke-zaklady-a-uprava-vyrazov",
      "title": "Lomené výrazy, mocniny a odmocniny",
      "custom": true,
      "maxScore": 6,
      "blocks": [
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Ktoré hodnoty musíme vylúčiť ešte pred úpravou zlomku alebo odmocniny?"
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Chuquet písal záporné exponenty skôr, než boli bežné"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Nicolas Chuquet v rukopise z roku 1484 používal záporné aj nulové exponenty v čase, keď takýto zápis nebol štandardný. Jeho práca zostala dlho nevydaná, no ukazuje, že rozširovanie pravidiel mocnín bolo postupným historickým procesom. Každé rozšírenie vyžadovalo pozorne určiť, pre ktoré hodnoty pravidlá platia."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Za touto témou je vždy rovnaká vedecká otázka: čo možno tvrdiť na základe merania a čo je iba dojem z obrázka? Odpoveď získame porovnaním viacerých stavov, nie zapamätaním definície. V nasledujúcom modeli preto dostaneš cieľ vyjadrený číslom, polohou alebo vzťahom. Posuvníky a voľné body sú tvoje nástroje; bod za úlohu získaš až po splnení podmienky zapísanej priamo v dátach grafu. Ktoré hodnoty musíme vylúčiť ešte pred úpravou zlomku alebo odmocniny? Po úspechu si výsledok obháj jednou vetou a porovnaj ho s pôvodným odhadom, nie iba so zeleným potvrdením."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "instruction",
          "tts": false,
          "content": [
            {
              "type": "text",
              "text": "Najprv si tipni:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": "Nájdi kladné x, pri ktorom sa hodnoty "
            },
            {
              "type": "formula",
              "tex": "x^{2}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a 1/"
            },
            {
              "type": "formula",
              "tex": "x^{2}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " rovnajú. Zapíš si odhad skôr, než pohneš prvým ovládačom."
            }
          ]
        },
        {
          "type": "geogebra",
          "title": "Mocniny a záporný exponent",
          "app": "graphing",
          "bounds": [
            -5,
            5,
            -1,
            10
          ],
          "commands": [
            "f(x)=x^2",
            "g(x)=1/x^2",
            "x0=Slider(0.2,3,0.05,1,150,false,true,false,false)",
            "SetValue(x0,2)",
            "A=(x0,f(x0))",
            "B=(x0,g(x0))",
            "diff=abs(f(x0)-g(x0))",
            "fval=f(x0)",
            "gval=g(x0)",
            "fval=f(x0)",
            "gval=g(x0)"
          ],
          "controls": [],
          "tasks": [
            {
              "text": "Nájdi kladné x, pri ktorom sa hodnoty x² a 1/x² rovnajú.",
              "condition": "diff<0.01 && x0>0"
            },
            {
              "text": "Nastav x tak, aby x² bolo približne šestnásťkrát väčšie než 1/x².",
              "condition": "fval>15.5*gval && fval<16.5*gval"
            }
          ],
          "expected": [],
          "colors": {
            "f": [
              29,
              78,
              216
            ],
            "g": [
              220,
              38,
              38
            ]
          },
          "fill": {},
          "open": [],
          "preserveStyle": true,
          "toolbar": true,
          "maxScore": 2,
          "tts": false,
          "interactionModel": "bodovana-graficka-uloha"
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Obor a podmienky:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Ak pri konkrétnom príklade nie je napísané inak, základný obor je "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Pri zlomkoch, odmocninách a ďalších obmedzeniach sa navyše zapisuje podmienka "
            },
            {
              "type": "formula",
              "tex": "P",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; riešenie musí patriť do oboru aj spĺňať všetky podmienky."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri lomených výrazoch sa kráti iba "
            },
            {
              "type": "text",
              "text": "spoločný činiteľ",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " čitateľa a menovateľa. Pôvodné definičné podmienky zostávajú platné aj po skrátení."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Príklad 9"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\frac{-2xYz^2}{10x^2z}=-\\frac{Yz}{5x},\\qquad x\\ne0,\\ z\\ne0.",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Príklad 10"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}\\frac{-8x^6y^4z^7}{(2x^3)(4ub^4z^7)}\n&=\\frac{-8x^6y^4z^7}{8ux^3b^4z^7}\\\\\n&=-\\frac{x^3y^4}{ub^4}.\n\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Podmienky pôvodného výrazu sú "
            },
            {
              "type": "formula",
              "tex": "x\\ne0,\\ u\\ne0,\\ b\\ne0,\\ z\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Príklad 11: mocnina zlomku"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}\\frac{(-2x^2Yz)^2}{\\left(\\frac{x^2}{y^2}\\right)^2}\n&=\\frac{4x^4Y^2z^2}{x^4/y^4}\\\\\n&=4x^4Y^2z^2\\cdot\\frac{y^4}{x^4}\\\\\n&=4y^4Y^2z^2,\n\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "pričom "
            },
            {
              "type": "formula",
              "tex": "x\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a "
            },
            {
              "type": "formula",
              "tex": "y\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Veľké "
            },
            {
              "type": "formula",
              "tex": "Y",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a malé "
            },
            {
              "type": "formula",
              "tex": "y",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " označujú rozdielne premenné."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Príklad 12: odmocniny ako mocniny"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}\\frac{\\sqrt{x}\\sqrt[4]{y}}{\\sqrt{x^3}\\sqrt[5]{y}}\n&=x^{1/2-3/2}y^{1/4-1/5}\\\\\n&=x^{-1}y^{1/20}\n=\\frac{\\sqrt[20]{y}}{x}.\n\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "V reálnych číslach je pre pôvodný výraz potrebné "
            },
            {
              "type": "formula",
              "tex": "x>0,\\ y>0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Príklad 13: vnorené odmocniny a záporné exponenty"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}\n\\frac{\\sqrt{a^9\\sqrt{b^{-3}}}}{\\sqrt[5]{b^3\\sqrt{a^3}}}\n&=\\frac{a^{9/2}b^{-3/4}}{b^{3/5}a^{3/10}}\\\\\n&=a^{9/2-3/10}b^{-3/4-3/5}\\\\\n&=\\frac{a^{21/5}}{b^{27/20}},\n\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pre tento reálny zápis a nenulový menovateľ používame "
            },
            {
              "type": "formula",
              "tex": "a>0,\\ b>0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pravidlá mocnín"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "a^m a^n=a^{m+n},\\qquad \\frac{a^m}{a^n}=a^{m-n},\\qquad (a^m)^n=a^{mn},\\qquad a^{-n}=\\frac1{a^n}.",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Podmienka zostáva platná aj po skrátení"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri výraze"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\frac{x^2-4}{x-2}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "najprv zapisujeme "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R,\\ P:x\\ne2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Až potom rozložíme čitateľa:"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\frac{(x-2)(x+2)}{x-2}=x+2,\\qquad x\\ne2",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Výrazy sú rovnaké na pôvodnom definičnom obore, ale funkcia "
            },
            {
              "type": "formula",
              "tex": "y=x+2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je definovaná aj v bode "
            },
            {
              "type": "formula",
              "tex": "x=2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Pôvodný lomený výraz tam definovaný nie je. Na grafe preto vzniká „diera“ v bode "
            },
            {
              "type": "formula",
              "tex": "[2,4]",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Krátime činitele, nie členy"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\frac{x+2}{x}\\ne2,\\qquad \\frac{x+2}{x}=1+\\frac2x,\\quad x\\ne0",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Člen "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " nemožno „vyškrtnúť“ zo súčtu "
            },
            {
              "type": "formula",
              "tex": "x+2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Krátenie je možné až po rozklade celého čitateľa a menovateľa na súčin."
            }
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Spoločný menovateľ pri viacerých členoch"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\frac2{x-1}-\\frac3{x+2}=\\frac{2(x+2)-3(x-1)}{(x-1)(x+2)},\\qquad x\\ne1,-2",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Znamienko mínus pred druhým zlomkom pôsobí na celý čitateľ "
            },
            {
              "type": "formula",
              "tex": "3(x-1)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Po roznásobení dostaneme čitateľ "
            },
            {
              "type": "formula",
              "tex": "2x+4-3x+3=7-x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Podmienky pri zlomkových exponentoch"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pravidlá sčítania exponentov treba v reálnych číslach používať spolu s definičným oborom. Napríklad "
            },
            {
              "type": "formula",
              "tex": "\\sqrt{x^2}=|x|",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", nie všeobecne "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Pri zápise "
            },
            {
              "type": "formula",
              "tex": "x^{1/2}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " pracujeme pre reálne hodnoty s "
            },
            {
              "type": "formula",
              "tex": "x\\ge0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; ak je taký výraz v menovateli, potrebujeme "
            },
            {
              "type": "formula",
              "tex": "x>0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Úlohy na precvičenie"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. Upravte "
            },
            {
              "type": "formula",
              "tex": "\\frac{18x^5y^3}{6x^2y}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a uveďte podmienky."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. Upravte "
            },
            {
              "type": "formula",
              "tex": "\\frac{x^{3/2}}{x^{1/2}}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. Zapíšte bez záporného exponentu "
            },
            {
              "type": "formula",
              "tex": "a^{-3}b^2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "4. Upravte "
            },
            {
              "type": "formula",
              "tex": "\\sqrt[3]{x^6}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zobraziť výsledky a postupy"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. "
            },
            {
              "type": "formula",
              "tex": "3x^3y^2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", pričom v pôvodnom výraze "
            },
            {
              "type": "formula",
              "tex": "x\\ne0,\\ y\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; pri pôvodnom reálnom výraze s odmocninami je "
            },
            {
              "type": "formula",
              "tex": "x>0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. "
            },
            {
              "type": "formula",
              "tex": "\\frac{b^2}{a^3}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", "
            },
            {
              "type": "formula",
              "tex": "a\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "4. Pre reálne "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " platí "
            },
            {
              "type": "formula",
              "tex": "\\sqrt[3]{x^6}=x^2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Krátime iba spoločné nenulové "
            },
            {
              "type": "text",
              "text": "činitele",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": ". Z výrazu "
            },
            {
              "type": "formula",
              "tex": "\\frac{x(x-2)}{x}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " možno pre "
            },
            {
              "type": "formula",
              "tex": "x\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " dostať "
            },
            {
              "type": "formula",
              "tex": "x-2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", ale pôvodná podmienka "
            },
            {
              "type": "formula",
              "tex": "x\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " zostáva."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "V reálnych číslach platí "
            },
            {
              "type": "formula",
              "tex": "\\sqrt{x^2}=|x|",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Pri zlomkových exponentoch treba sledovať paritu menovateľa: napríklad "
            },
            {
              "type": "formula",
              "tex": "x^{1/2}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " vyžaduje "
            },
            {
              "type": "formula",
              "tex": "x\\ge0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", kým reálna tretia odmocnina existuje aj pre záporné "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "test",
          "title": "Krátky test: Lomené výrazy, mocniny a odmocniny",
          "source": "# Krátky test: Lomené výrazy, mocniny a odmocniny\n\n[ABCD]\nČo možno v zlomku krátiť?\n* Spoločné nenulové činitele\n- Ľubovoľné členy\n- Iba exponenty\n- Súčty v zátvorkách\n\n[ABCD]\nČomu sa rovná a⁻³?\n* 1/a³\n- −a³\n- a/3\n- 3a\n\n[ABCD]\nČomu sa rovná x⁵/x²?\n* x³\n- x⁷\n- x²⋅⁵\n- 1/x³\n\n[ABCD]\nČo platí o pôvodných definičných podmienkach po skrátení?\n* Zostávajú platné\n- Vždy zaniknú\n- Nahradia sa podmienkou x>0\n- Platia iba pri polynómoch\n",
          "maxScore": 4,
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "instruction",
          "tts": false,
          "content": [
            {
              "type": "text",
              "text": "Vráť sa k prvému odhadu:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": "Zmenil sa po splnení bodovaných úloh? Uveď jednu konkrétnu hodnotu, polohu bodu alebo vlastnosť grafu, ktorá tvoje rozhodnutie podopiera."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zapamätaj si"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Krátenie: Krátime činitele, nie členy spojené sčítaním alebo odčítaním."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Definičné podmienky: Určujú sa z pôvodného výrazu a po skrátení sa nestrácajú."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Zlomkové exponenty: Platí napríklad x^("
            },
            {
              "type": "formula",
              "tex": "1/n)=n-t",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "á odmocnina z x; pri párnom n treba rešpektovať reálny definičný obor."
            }
          ]
        }
      ],
      "eyebrow": "Lekcia 4 z 11",
      "revision": "objavna-verzia-4"
    },
    {
      "id": "mnoziny-podmienky-a-bezpecne-upravy-rovnic",
      "courseId": "kurz-algebraicke-zaklady-a-uprava-vyrazov",
      "title": "Množiny, podmienky a bezpečné úpravy rovníc",
      "custom": true,
      "maxScore": 8,
      "blocks": [
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Ktoré úpravy zachovajú všetky riešenia a ktoré môžu vytvoriť cudzie?"
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Prečo starí algebraici odmietali niektoré riešenia"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Al-Chvárizmí pracoval najmä s kladnými veličinami, pretože rovnice interpretoval geometricky a prakticky. Záporné či nemožné hodnoty preto neboli automaticky prijateľnými riešeniami. Moderné definičné podmienky pokračujú v tej istej disciplíne: výsledok musí patriť do sveta, v ktorom bol problém položený."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Na stole by vtedy neležal hotový vzorec, iba údaje a otázka, ktorú bolo treba rozhodnúť. Užitočný nápad vzniká vtedy, keď sa neurčité slová nahradia meraním: zmeníš jednu hodnotu, sleduješ následok a porovnáš ho s ďalším prípadom. Rovnaký postup použiješ v interaktívnom modeli. Cieľ nebude splnený približným dojmom, ale až konkrétnou hodnotou alebo vzťahom medzi objektmi. Ktoré úpravy zachovajú všetky riešenia a ktoré môžu vytvoriť cudzie? Po úspechu si výsledok obháj jednou vetou a porovnaj ho s pôvodným odhadom, nie iba so zeleným potvrdením."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "instruction",
          "tts": false,
          "content": [
            {
              "type": "text",
              "text": "Najprv si tipni:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": "Nastav priamku a vodorovnú čiaru tak, aby sa pretli pri "
            },
            {
              "type": "formula",
              "tex": "x\\approx 2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a "
            },
            {
              "type": "formula",
              "tex": "y\\approx 1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Zapíš si odhad skôr, než pohneš prvým ovládačom."
            }
          ]
        },
        {
          "type": "geogebra",
          "title": "Počet riešení ako počet priesečníkov",
          "app": "graphing",
          "bounds": [
            -8,
            8,
            -8,
            8
          ],
          "commands": [
            "a=1",
            "b=-2",
            "c=0",
            "f(x)=a*x+b",
            "g(x)=c",
            "xCross=If(a!=0,(c-b)/a)",
            "lineGap=abs(b-c)"
          ],
          "controls": [
            [
              "a",
              -3,
              3,
              0.25,
              1
            ],
            [
              "b",
              -5,
              5,
              0.25,
              -2
            ],
            [
              "c",
              -5,
              5,
              0.25,
              0
            ]
          ],
          "tasks": [
            {
              "text": "Nastav priamku a vodorovnú čiaru tak, aby sa pretli pri x≈2 a y≈1.",
              "condition": "xCross>1.95 && xCross<2.05 && c>0.95 && c<1.05"
            },
            {
              "text": "Vytvor dve rôzne rovnobežné vodorovné priamky bez priesečníka.",
              "condition": "a>-0.02 && a<0.02 && lineGap>0.2"
            }
          ],
          "expected": [],
          "colors": {
            "f": [
              29,
              78,
              216
            ],
            "g": [
              220,
              38,
              38
            ]
          },
          "fill": {},
          "open": [],
          "preserveStyle": true,
          "toolbar": true,
          "maxScore": 2,
          "tts": false,
          "interactionModel": "bodovana-graficka-uloha"
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Táto lekcia vysvetľuje pravidlá, ktoré treba použiť "
            },
            {
              "type": "text",
              "text": "pred riešením každej rovnice",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": ". Najprv určíme číselný obor a definičné podmienky, potom upravujeme obe strany ako celé výrazy a nakoniec skontrolujeme, či úpravy zachovali všetky riešenia."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. Číselné množiny a obor riešenia"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Obor riešenia",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " alebo základná množina sa označuje napríklad "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Určuje, medzi akými číslami smieme hľadať riešenia."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "formula",
              "tex": "\\mathbb N=\\{1,2,3,\\ldots\\}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " – prirodzené čísla. Ak chceme zahrnúť nulu, v tomto kurze píšeme "
            },
            {
              "type": "formula",
              "tex": "\\mathbb N_0=\\{0,1,2,\\ldots\\}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "formula",
              "tex": "\\mathbb Z=\\{\\ldots,-2,-1,0,1,2,\\ldots\\}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " – celé čísla."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "formula",
              "tex": "\\mathbb Q=\\left\\{\\frac pq;\\ p,q\\in\\mathbb Z,\\ q\\ne0\\right\\}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " – racionálne čísla; majú konečný alebo periodický desatinný rozvoj."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "formula",
              "tex": "\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " – reálne čísla; zahŕňajú racionálne aj iracionálne čísla, napríklad "
            },
            {
              "type": "formula",
              "tex": "\\sqrt2,\\pi",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "formula",
              "tex": "\\mathbb C=\\{a+bi;\\ a,b\\in\\mathbb R,\\ i^2=-1\\}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " – komplexné čísla."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\mathbb N\\subset\\mathbb Z\\subset\\mathbb Q\\subset\\mathbb R\\subset\\mathbb C",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Tá istá rovnica môže mať v rôznych oboroch iný počet riešení. Napríklad:"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "x^2=2",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• v "
            },
            {
              "type": "formula",
              "tex": "\\mathbb N",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a "
            },
            {
              "type": "formula",
              "tex": "\\mathbb Q",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " nemá riešenie,"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• v "
            },
            {
              "type": "formula",
              "tex": "\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " má dve riešenia "
            },
            {
              "type": "formula",
              "tex": "x=\\pm\\sqrt2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ","
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• v "
            },
            {
              "type": "formula",
              "tex": "\\mathbb C",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " má tie isté dve reálne riešenia, ktoré sú zároveň komplexnými číslami."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. Definičné podmienky"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Podmienky označujeme písmenom "
            },
            {
              "type": "formula",
              "tex": "P",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Zapisujeme ich "
            },
            {
              "type": "text",
              "text": "pred úpravou",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": ", pretože neskôr sa môže zakázaný menovateľ skrátiť alebo odmocnina zmiznúť. To však pôvodnú podmienku neruší."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Časť rovnice — Nutná podmienka — Príklad"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "menovateľ — nesmie byť nulový — "
            },
            {
              "type": "formula",
              "tex": "\\frac1{x-3}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " ⇒ "
            },
            {
              "type": "formula",
              "tex": "P:x\\ne3",
              "display": "inline",
              "tts": false
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "párna odmocnina — výraz pod odmocninou je nezáporný — "
            },
            {
              "type": "formula",
              "tex": "\\sqrt{2x-1}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " ⇒ "
            },
            {
              "type": "formula",
              "tex": "P:x\\ge\\frac12",
              "display": "inline",
              "tts": false
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "logaritmus — argument je kladný — "
            },
            {
              "type": "formula",
              "tex": "\\log(x+4)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " ⇒ "
            },
            {
              "type": "formula",
              "tex": "P:x>-4",
              "display": "inline",
              "tts": false
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "delenie pri úprave — deliteľ musí byť nenulový — delenie výrazom "
            },
            {
              "type": "formula",
              "tex": "x-2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " vyžaduje "
            },
            {
              "type": "formula",
              "tex": "x\\ne2",
              "display": "inline",
              "tts": false
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Príklad s viacerými podmienkami:",
              "marks": [
                "bold"
              ]
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\frac{\\sqrt{x-1}}{(x-3)(x+2)}=2",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "formula",
              "tex": "U=\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", "
            },
            {
              "type": "formula",
              "tex": "P:x\\ge1,\\ x\\ne3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Podmienka "
            },
            {
              "type": "formula",
              "tex": "x\\ne-2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je už automaticky splnená z "
            },
            {
              "type": "formula",
              "tex": "x\\ge1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", no môžeme ju pri odvodzovaní uviesť."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. Ekvivalentné úpravy – riešenia sa nemenia"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Znak "
            },
            {
              "type": "formula",
              "tex": "\\Longleftrightarrow",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " znamená, že dva zápisy majú za daných podmienok rovnakú množinu riešení. Bezpečné sú najmä tieto operácie:"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. pripočítať alebo odčítať ten istý definovaný výraz na oboch stranách,"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. vynásobiť alebo vydeliť obe strany tým istým "
            },
            {
              "type": "text",
              "text": "známym nenulovým číslom",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": ","
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. roznásobiť zátvorky, vytknúť spoločný činiteľ alebo spojiť podobné členy,"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "4. zameniť strany rovnice."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "L(x)=P(x)\\Longleftrightarrow L(x)+A(x)=P(x)+A(x)",
          "display": "block",
          "tts": false
        },
        {
          "type": "formula",
          "tex": "L(x)=P(x)\\Longleftrightarrow cL(x)=cP(x),\\qquad c\\ne0",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Výraz „prenesieme člen na druhú stranu a zmeníme znamienko“ je iba skratka. V skutočnosti k obom stranám pripočítame opačný výraz:"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "3x+7=19\\Longleftrightarrow 3x+7-7=19-7\\Longleftrightarrow3x=12",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "4. Operácia sa musí vykonať na celej strane"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Ľavá aj pravá strana sú celé výrazy. Ak rovnicu násobíme číslom "
            },
            {
              "type": "formula",
              "tex": "12",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", používame zátvorky:"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\frac{2x-1}{3}-\\frac{x+2}{4}=5-\\frac{x-1}{6}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Obor a podmienky:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", menovatele sú nenulové konštanty, takže bez dodatočnej podmienky."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}\n12\\left(\\frac{2x-1}{3}-\\frac{x+2}{4}\\right)\n&=12\\left(5-\\frac{x-1}{6}\\right)\\\\\n4(2x-1)-3(x+2)&=60-2(x-1)\\\\\n8x-4-3x-6&=60-2x+2\\\\\n5x-10&=62-2x\\\\\n7x&=72\\\\\nx&=\\frac{72}{7}.\n\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Nesprávne:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " vynásobiť číslom "
            },
            {
              "type": "formula",
              "tex": "12",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " iba prvý zlomok. Operácia sa musí dotknúť "
            },
            {
              "type": "text",
              "text": "každého člena na oboch stranách",
              "marks": [
                "italic"
              ]
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "5. Úpravy, ktoré môžu pridať alebo odstrániť riešenia"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri týchto krokoch používame skôr jednosmernú šípku "
            },
            {
              "type": "formula",
              "tex": "\\Longrightarrow",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", vytvárame "
            },
            {
              "type": "text",
              "text": "kandidátov",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " a na konci robíme skúšku v pôvodnej rovnici."
            }
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Násobenie výrazom závislým od neznámej môže pridať riešenie"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "x=1\\Longrightarrow x^2=x",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Nová rovnica má riešenia "
            },
            {
              "type": "formula",
              "tex": "x\\in\\{0,1\\}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", ale pôvodná iba "
            },
            {
              "type": "formula",
              "tex": "x=1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Aby bolo násobenie ekvivalentné, museli by sme pridať podmienku "
            },
            {
              "type": "formula",
              "tex": "x\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Delenie výrazom závislým od neznámej môže odstrániť riešenie"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "x(x-2)=0",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Ak bez rozmyslu vydelíme rovnicu výrazom "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", dostaneme iba "
            },
            {
              "type": "formula",
              "tex": "x=2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a stratíme riešenie "
            },
            {
              "type": "formula",
              "tex": "x=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Správne použijeme pravidlo nulového súčinu: "
            },
            {
              "type": "formula",
              "tex": "x=0\\ \\lor\\ x-2=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Umocnenie môže vytvoriť nepravé riešenie"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "x=-2\\Longrightarrow x^2=4",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Rovnica "
            },
            {
              "type": "formula",
              "tex": "x^2=4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " má aj "
            },
            {
              "type": "formula",
              "tex": "x=2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", ktoré nepatrí pôvodnej rovnici. Preto po umocnení kontrolujeme všetkých kandidátov."
            }
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Odmocnenie bez absolútnej hodnoty môže riešenie stratiť"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "x^2=9\\Longleftrightarrow |x|=3\\Longleftrightarrow x=\\pm3",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Nesprávny krok "
            },
            {
              "type": "formula",
              "tex": "\\sqrt{x^2}=x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " zabudne, že všeobecne platí "
            },
            {
              "type": "formula",
              "tex": "\\sqrt{x^2}=|x|",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Odstránenie menovateľov"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\frac{x+1}{x-2}=3",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Podmienky:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R,\\ P:x\\ne2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Násobenie výrazom "
            },
            {
              "type": "formula",
              "tex": "x-2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je ekvivalentné iba na obore, kde "
            },
            {
              "type": "formula",
              "tex": "x-2\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ":"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\frac{x+1}{x-2}=3\\Longleftrightarrow x+1=3(x-2)\\Longleftrightarrow x=\\frac72",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Hodnota "
            },
            {
              "type": "formula",
              "tex": "\\frac72",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " podmienku spĺňa. Zakázaná hodnota "
            },
            {
              "type": "formula",
              "tex": "2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " sa nesmie vrátiť ani vtedy, ak sa menovateľ počas výpočtu stratí."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "6. Správny štandardný postup úpravy rovnice"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. "
            },
            {
              "type": "text",
              "text": "Napíš obor:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " napríklad "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. "
            },
            {
              "type": "text",
              "text": "Urči podmienky:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " menovatele, odmocniny, logaritmy a plánované delenie."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. "
            },
            {
              "type": "text",
              "text": "Uprav každú stranu:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " zátvorky, mocniny, súčiny a podobné členy."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "4. "
            },
            {
              "type": "text",
              "text": "Odstráň zlomky bezpečne:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " násob najmenším spoločným násobkom menovateľov a zachovaj pôvodné podmienky."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "5. "
            },
            {
              "type": "text",
              "text": "Presuň všetky členy na jednu stranu:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " pri polynomiálnej rovnici získaj "
            },
            {
              "type": "formula",
              "tex": "P(x)=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "6. "
            },
            {
              "type": "text",
              "text": "Zoraď členy zostupne podľa exponentu:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " napríklad "
            },
            {
              "type": "formula",
              "tex": "3x^4-2x^2+7x-1=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "7. "
            },
            {
              "type": "text",
              "text": "Vyrieš rovnicu vhodnou metódou.",
              "marks": [
                "bold"
              ]
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "8. "
            },
            {
              "type": "text",
              "text": "Porovnaj kandidátov s podmienkami a urob skúšku v pôvodnej rovnici.",
              "marks": [
                "bold"
              ]
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "9. "
            },
            {
              "type": "text",
              "text": "Zapíš množinu riešení:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " napríklad "
            },
            {
              "type": "formula",
              "tex": "S=\\left\\{-1,2\\right\\}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Neznáma na ľavej strane nie je matematická povinnosť, ale užitočná konvencia. Zápisy "
            },
            {
              "type": "formula",
              "tex": "x=4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a "
            },
            {
              "type": "formula",
              "tex": "4=x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " sú rovnocenné. Pri polynómoch je najprehľadnejší normálny tvar s nulou na pravej strane a najvyšším exponentom na začiatku."
            }
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Komplikovaný príklad v správnom poradí"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\frac{2(x-1)}{3}-\\frac{x+5}{2}=\\frac{x-7}{6}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Podmienky:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; menovatele "
            },
            {
              "type": "formula",
              "tex": "2,3,6",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " sú nenulové konštanty."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}\n6\\left(\\frac{2(x-1)}3-\\frac{x+5}2\\right)&=6\\cdot\\frac{x-7}6\\\\\n4(x-1)-3(x+5)&=x-7\\\\\n4x-4-3x-15&=x-7\\\\\nx-19&=x-7\\\\\n-19&=-7.\n\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Vznikol spor, preto "
            },
            {
              "type": "formula",
              "tex": "S=\\varnothing",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Nie je správne „vydeliť rovnicu číslom "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "“ ani tvrdiť, že "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " sa rovná nejakej hodnote; neznáme sa úplne vyrušili."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "7. Ako určiť počet riešení"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Počet riešení neurčujeme iba podľa vzhľadu pôvodného zápisu. Rovnicu najprv upravíme pri zachovaní podmienok."
            }
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Lineárna rovnica"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Po úprave do tvaru "
            },
            {
              "type": "formula",
              "tex": "Ax=B",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " nastanú presne tri prípady:"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "formula",
              "tex": "A\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " ⇒ jedno riešenie "
            },
            {
              "type": "formula",
              "tex": "x=\\frac BA",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "formula",
              "tex": "A=0,\\ B=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " ⇒ pravdivý výrok "
            },
            {
              "type": "formula",
              "tex": "0=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", teda "
            },
            {
              "type": "formula",
              "tex": "S=U",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "formula",
              "tex": "A=0,\\ B\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " ⇒ spor "
            },
            {
              "type": "formula",
              "tex": "0=B",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", teda "
            },
            {
              "type": "formula",
              "tex": "S=\\varnothing",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Polynomiálna rovnica"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Polynóm stupňa "
            },
            {
              "type": "formula",
              "tex": "n",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " má najviac "
            },
            {
              "type": "formula",
              "tex": "n",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " rôznych reálnych koreňov. V komplexných číslach má presne "
            },
            {
              "type": "formula",
              "tex": "n",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " koreňov, ak počítame násobnosti. Stupeň teda dáva "
            },
            {
              "type": "text",
              "text": "hornú hranicu",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": ", nie automaticky počet reálnych riešení."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "formula",
              "tex": "x^2-1=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " má v "
            },
            {
              "type": "formula",
              "tex": "\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " dve riešenia."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "formula",
              "tex": "x^2=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " má jedno rôzne riešenie, ale dvojnásobný koreň."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "formula",
              "tex": "x^2+1=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " nemá v "
            },
            {
              "type": "formula",
              "tex": "\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " riešenie, no v "
            },
            {
              "type": "formula",
              "tex": "\\mathbb C",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " má korene "
            },
            {
              "type": "formula",
              "tex": "\\pm i",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Racionálne a odmocninové rovnice"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Po odstránení menovateľov alebo odmocnín získame iba kandidátov. Skutočný počet riešení poznáme až po:"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. vyriešení pomocnej rovnice,"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. vylúčení hodnôt porušujúcich podmienky,"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. skúške v pôvodnej rovnici."
            }
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Rovnice s parametrom"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Parameter môže meniť počet riešení. V rovnici"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "(a-2)x=a-2",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "platí "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " pre neznámu "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a parameter "
            },
            {
              "type": "formula",
              "tex": "a\\in\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Ak "
            },
            {
              "type": "formula",
              "tex": "a\\ne2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", môžeme deliť "
            },
            {
              "type": "formula",
              "tex": "a-2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a dostaneme "
            },
            {
              "type": "formula",
              "tex": "x=1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Ak "
            },
            {
              "type": "formula",
              "tex": "a=2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", rovnica sa zmení na "
            },
            {
              "type": "formula",
              "tex": "0=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a riešením je každé "
            },
            {
              "type": "formula",
              "tex": "x\\in\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Úlohy na precvičenie"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. Zapíšte obor a podmienky rovnice "
            },
            {
              "type": "formula",
              "tex": "\\frac{\\sqrt{x+2}}{x^2-9}=1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. Vysvetlite, prečo z rovnice "
            },
            {
              "type": "formula",
              "tex": "(x-4)(x+1)=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " nemožno bez rozdelenia prípadov deliť výrazom "
            },
            {
              "type": "formula",
              "tex": "x-4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. Vyriešte a určte počet riešení: "
            },
            {
              "type": "formula",
              "tex": "4(2x-1)-3x=5x-4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "4. Vyriešte a určte počet riešení: "
            },
            {
              "type": "formula",
              "tex": "3(x-2)+7=3x+1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "5. Vyriešte s podmienkou: "
            },
            {
              "type": "formula",
              "tex": "\\frac{x^2-4}{x-2}=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "6. Nájdite nepravé riešenie vzniknuté umocnením: "
            },
            {
              "type": "formula",
              "tex": "\\sqrt{x+6}=x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "7. Pre parameter "
            },
            {
              "type": "formula",
              "tex": "a\\in\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " určte počet riešení rovnice "
            },
            {
              "type": "formula",
              "tex": "(a-1)x=2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "8. Upravte do normálneho tvaru so zostupnými exponentmi: "
            },
            {
              "type": "formula",
              "tex": "5-2x^3+x=4x^2-7",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zobraziť výsledky a postupy"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", odmocnina vyžaduje "
            },
            {
              "type": "formula",
              "tex": "x\\ge-2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", menovateľ "
            },
            {
              "type": "formula",
              "tex": "x\\ne\\pm3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Spolu "
            },
            {
              "type": "formula",
              "tex": "P:x\\ge-2,\\ x\\ne3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; hodnota "
            },
            {
              "type": "formula",
              "tex": "-3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " už neleží v "
            },
            {
              "type": "formula",
              "tex": "x\\ge-2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. Delením výrazom "
            },
            {
              "type": "formula",
              "tex": "x-4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " by sme zaviedli podmienku "
            },
            {
              "type": "formula",
              "tex": "x\\ne4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a stratili koreň "
            },
            {
              "type": "formula",
              "tex": "x=4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Správne: "
            },
            {
              "type": "formula",
              "tex": "x=4\\lor x=-1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. Po roznásobení "
            },
            {
              "type": "formula",
              "tex": "8x-4-3x=5x-4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", teda "
            },
            {
              "type": "formula",
              "tex": "5x-4=5x-4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Ide o identitu: "
            },
            {
              "type": "formula",
              "tex": "S=\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "4. "
            },
            {
              "type": "formula",
              "tex": "3x-6+7=3x+1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " vedie na "
            },
            {
              "type": "formula",
              "tex": "3x+1=3x+1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Opäť "
            },
            {
              "type": "formula",
              "tex": "S=\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "5. "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R,\\ P:x\\ne2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Rozklad "
            },
            {
              "type": "formula",
              "tex": "\\frac{(x-2)(x+2)}{x-2}=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " dá pri zachovaní podmienky "
            },
            {
              "type": "formula",
              "tex": "x+2=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", takže "
            },
            {
              "type": "formula",
              "tex": "S=\\{-2\\}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "6. Podmienka pravej strany: "
            },
            {
              "type": "formula",
              "tex": "x\\ge0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Po umocnení "
            },
            {
              "type": "formula",
              "tex": "x+6=x^2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", teda "
            },
            {
              "type": "formula",
              "tex": "(x-3)(x+2)=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Kandidáti sú "
            },
            {
              "type": "formula",
              "tex": "3,-2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", ale "
            },
            {
              "type": "formula",
              "tex": "-2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je nepravý. "
            },
            {
              "type": "formula",
              "tex": "S=\\{3\\}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "7. Ak "
            },
            {
              "type": "formula",
              "tex": "a\\ne1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", je jedno riešenie "
            },
            {
              "type": "formula",
              "tex": "x=\\frac2{a-1}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Ak "
            },
            {
              "type": "formula",
              "tex": "a=1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", vznikne spor "
            },
            {
              "type": "formula",
              "tex": "0=2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", teda žiadne riešenie."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "8. "
            },
            {
              "type": "formula",
              "tex": "2x^3+4x^2-x-12=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Úprava — Čo treba sledovať"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "pripočítanie rovnakého výrazu — ekvivalentná úprava"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "násobenie známym nenulovým číslom — ekvivalentná úprava"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "násobenie výrazom s neznámou — môže pridať riešenia, treba rozbor"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "umocnenie na párnu mocninu — iba dôsledkový krok, nutná skúška"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Podmienky zapisuj ešte pred úpravami. Pri parametrickej rovnici rozdeľ riešenie podľa hodnôt parametra, pri ktorých by sa delilo nulou."
            }
          ]
        },
        {
          "type": "test",
          "title": "Krátky test: Množiny, podmienky a bezpečné úpravy rovníc",
          "source": "# Krátky test: Množiny, podmienky a bezpečné úpravy rovníc\n\n[ABCD]\nKtorá úprava je vždy ekvivalentná?\n* Pripočítanie rovnakého definovaného výrazu k obom stranám\n- Vydelenie oboch strán výrazom x\n- Umocnenie oboch strán na druhú\n- Odmocnenie oboch strán bez absolútnej hodnoty\n\n[ABCD]\nPrečo môže delenie rovnice výrazom x stratiť riešenie?\n* Pretože prípad x=0 sa delením vylúči\n- Pretože sa zmení stupeň vždy na vyšší\n- Pretože x musí byť kladné\n- Pretože delenie nie je definované pre záporné x\n\n[ABCD]\nČo znamená zápis U=R, P: x≠2?\n* Hľadáme reálne riešenia okrem hodnoty 2\n- Hľadáme iba celé čísla\n- Číslo 2 je jediné riešenie\n- Rovnica nemá riešenie\n\n[ABCD]\nKoľko riešení má po úprave rovnica 0x=0 v obore R?\n* Nekonečne veľa\n- Žiadne\n- Práve jedno\n- Práve dve\n\n[ABCD]\nČo treba urobiť po umocnení rovnice?\n* Overiť kandidátov v pôvodnej rovnici\n- Automaticky prijať všetky korene\n- Vydeliť rovnicu nulou\n- Zmeniť obor na prirodzené čísla\n\n[ABCD]\nAk rovnica skončí tvarom 0=5, počet riešení je:\n* Žiadne riešenie\n- Jedno riešenie\n- Nekonečne veľa riešení\n- Päť riešení\n",
          "maxScore": 6,
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "instruction",
          "tts": false,
          "content": [
            {
              "type": "text",
              "text": "Vráť sa k prvému odhadu:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": "Zmenil sa po splnení bodovaných úloh? Uveď jednu konkrétnu hodnotu, polohu bodu alebo vlastnosť grafu, ktorá tvoje rozhodnutie podopiera."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zapamätaj si"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Obor a podmienky: Najprv zapíš U a P; výsledok musí spĺňať oboje."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Ekvivalentná úprava: Zachováva presne rovnakú množinu riešení."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Riziková úprava: Násobenie alebo delenie výrazom s neznámou, umocnenie a odmocnenie môžu pridať alebo odobrať riešenia."
            }
          ]
        }
      ],
      "eyebrow": "Lekcia 5 z 11",
      "revision": "objavna-verzia-4"
    },
    {
      "id": "linearne-rovnice-a-skuska",
      "courseId": "kurz-algebraicke-zaklady-a-uprava-vyrazov",
      "title": "Lineárne rovnice a skúška riešenia",
      "custom": true,
      "maxScore": 6,
      "blocks": [
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Ako vyriešime lineárnu rovnicu a spoľahlivo overíme výsledok?"
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Egyptské úlohy na „aha“"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Rhindov matematický papyrus z približne roku 1650 pred n. l. obsahuje úlohy, v ktorých sa hľadá neznáme množstvo označované slovom „aha“. Pisári používali metódu falošnej polohy: vyskúšali vhodnú hodnotu a výsledok úmerne opravili. Išlo o predchodcu riešenia lineárnych rovníc."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Predstav si túto situáciu ako krátke vyšetrovanie. Máš tvrdenie, ktoré môže byť pravdivé aj klamlivé, a potrebuješ dôkaz. Jedno nastavenie grafu nestačí, pretože môže ísť o náhodu. Zmeníš parameter, odmeriaš výsledok a potom zámerne vyhľadáš hraničný prípad. Interaktívna úloha ti pridelí bod iba vtedy, keď podmienku naozaj splníš. Tým sa z pozorovania stane overiteľný matematický argument. Ako vyriešime lineárnu rovnicu a spoľahlivo overíme výsledok? Po úspechu si výsledok obháj jednou vetou a porovnaj ho s pôvodným odhadom, nie iba so zeleným potvrdením."
            }
          ]
        },
        {
          "type": "geogebra",
          "title": "Riešenie ako priesečník priamok",
          "app": "graphing",
          "bounds": [
            -6,
            8,
            -8,
            10
          ],
          "commands": [
            "a=2",
            "b=-3",
            "c=5",
            "f(x)=a*x+b",
            "g(x)=c",
            "X=((c-b)/a,c)",
            "xx=x(X)",
            "xy=y(X)"
          ],
          "controls": [
            [
              "a",
              -4,
              4,
              0.25,
              2
            ],
            [
              "b",
              -6,
              6,
              0.25,
              -3
            ],
            [
              "c",
              -6,
              6,
              0.25,
              5
            ]
          ],
          "tasks": [
            {
              "text": "Nastav rovnice tak, aby ich priesečník bol približne (2, 1).",
              "condition": "xx>1.95 && xx<2.05 && xy>0.95 && xy<1.05"
            },
            {
              "text": "Nastav priesečník približne na (−1, 4).",
              "condition": "xx>-1.05 && xx<-0.95 && xy>3.95 && xy<4.05"
            }
          ],
          "expected": [],
          "colors": {
            "f": [
              29,
              78,
              216
            ],
            "g": [
              220,
              38,
              38
            ],
            "X": [
              22,
              163,
              74
            ]
          },
          "fill": {},
          "open": [],
          "preserveStyle": true,
          "toolbar": true,
          "maxScore": 2,
          "tts": false,
          "interactionModel": "bodovana-graficka-uloha"
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Obor a podmienky:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Ak pri konkrétnom príklade nie je napísané inak, základný obor je "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Pri zlomkoch, odmocninách a ďalších obmedzeniach sa navyše zapisuje podmienka "
            },
            {
              "type": "formula",
              "tex": "P",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; riešenie musí patriť do oboru aj spĺňať všetky podmienky."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Lineárna rovnica s jednou neznámou má po úprave tvar "
            },
            {
              "type": "formula",
              "tex": "ax+b=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", kde "
            },
            {
              "type": "formula",
              "tex": "a\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Ekvivalentné úpravy vykonávame na oboch stranách rovnako: pripočítame alebo odčítame rovnaký výraz, prípadne obe strany násobíme alebo delíme tým istým nenulovým číslom."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Základný vzorec"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "ax+b=0\\quad\\Longrightarrow\\quad x=-\\frac ba.",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Príklad so zátvorkami"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}3(2x-1)-4&=2(x+5)\\\\6x-3-4&=2x+10\\\\4x&=17\\\\x&=\\frac{17}{4}.\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Rovnica so zlomkami"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}\\frac{x-1}{3}+\\frac{x+2}{2}&=4\\\\\n2(x-1)+3(x+2)&=24\\\\\n5x+4&=24\\\\x&=4.\n\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Celú rovnicu sme vynásobili najmenším spoločným násobkom menovateľov, číslom 6."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Počet riešení"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "formula",
              "tex": "a\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ": práve jedno riešenie."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "formula",
              "tex": "a=0,\\ b=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ": identita a nekonečne veľa riešení."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "formula",
              "tex": "a=0,\\ b\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ": spor a žiadne riešenie."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Skúška",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " znamená dosadiť vypočítanú hodnotu do pôvodnej rovnice. Pre "
            },
            {
              "type": "formula",
              "tex": "x=4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " v zlomkovej rovnici dostaneme "
            },
            {
              "type": "formula",
              "tex": "1+3=4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Ako presne získať počet riešení lineárnej rovnice"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Všeobecnú rovnicu "
            },
            {
              "type": "formula",
              "tex": "a_1x+b_1=a_2x+b_2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " upravíme tak, aby neznáme boli na jednej strane a konštanty na druhej:"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "(a_1-a_2)x=b_2-b_1",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Označme "
            },
            {
              "type": "formula",
              "tex": "A=a_1-a_2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a "
            },
            {
              "type": "formula",
              "tex": "B=b_2-b_1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Potom rozhodujeme podľa rovnice "
            },
            {
              "type": "formula",
              "tex": "Ax=B",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ":"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "formula",
              "tex": "A\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ": jedno riešenie "
            },
            {
              "type": "formula",
              "tex": "x=B/A",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "formula",
              "tex": "A=0,\\ B=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ": výsledok "
            },
            {
              "type": "formula",
              "tex": "0=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", takže každé prípustné "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je riešením."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "formula",
              "tex": "A=0,\\ B\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ": výsledok "
            },
            {
              "type": "formula",
              "tex": "0=B",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", čo je spor; riešenie neexistuje."
            }
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Tri príklady s rovnakým vzhľadom, ale rôznym počtom riešení"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. Jedno riešenie.",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "3(x-2)+5=2x+7\\Longleftrightarrow3x-1=2x+7\\Longleftrightarrow x=8",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. Nekonečne veľa riešení.",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "3(x-2)+5=3x-1\\Longleftrightarrow3x-1=3x-1\\Longleftrightarrow0=0",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. Žiadne riešenie.",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "3(x-2)+5=3x+4\\Longleftrightarrow3x-1=3x+4\\Longleftrightarrow0=5",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Komplikovaná rovnica: bezpečné násobenie celej rovnice"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\frac{2x-1}{4}-\\left(\\frac{x+3}{6}-\\frac{x-2}{3}\\right)=\\frac{5-x}{8}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Podmienky:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; všetky menovatele sú nenulové konštanty. Najmenší spoločný násobok je "
            },
            {
              "type": "formula",
              "tex": "24",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Číslom "
            },
            {
              "type": "formula",
              "tex": "24",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " násobíme "
            },
            {
              "type": "text",
              "text": "každý člen oboch strán",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": ":"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}\n24\\left[\\frac{2x-1}{4}-\\left(\\frac{x+3}{6}-\\frac{x-2}{3}\\right)\\right]\n&=24\\cdot\\frac{5-x}{8}\\\\\n6(2x-1)-4(x+3)+8(x-2)&=3(5-x)\\\\\n12x-6-4x-12+8x-16&=15-3x\\\\\n16x-34&=15-3x\\\\\n19x&=49\\\\\nx&=\\frac{49}{19}.\n\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Vnorená zátvorka mala pred sebou mínus. Po vynásobení číslom "
            },
            {
              "type": "formula",
              "tex": "24",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " preto vzniklo "
            },
            {
              "type": "formula",
              "tex": "-4(x+3)+8(x-2)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", nie "
            },
            {
              "type": "formula",
              "tex": "-4(x+3)-8(x-2)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Praktická kontrolná schéma"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. Zakrúžkuj celú ľavú a celú pravú stranu."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. Ak násobíš číslom alebo výrazom, najprv napíš zátvorky okolo oboch strán."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. Pri každom riadku urob iba jeden typ operácie."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "4. Po vyrušení neznámej nehádam hodnotu; rozhodnem medzi identitou a sporom."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "5. Výsledok zapíšem ako množinu "
            },
            {
              "type": "formula",
              "tex": "S",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a urobím skúšku."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Úlohy na precvičenie"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. Vyriešte "
            },
            {
              "type": "formula",
              "tex": "5x-7=18",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. Vyriešte "
            },
            {
              "type": "formula",
              "tex": "4(2x-3)=3x+13",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. Rozhodnite o počte riešení: "
            },
            {
              "type": "formula",
              "tex": "2x+3=2x+3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a "
            },
            {
              "type": "formula",
              "tex": "2x+3=2x+5",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zobraziť výsledky a postupy"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. "
            },
            {
              "type": "formula",
              "tex": "x=5",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. "
            },
            {
              "type": "formula",
              "tex": "8x-12=3x+13",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", teda "
            },
            {
              "type": "formula",
              "tex": "5x=25",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a "
            },
            {
              "type": "formula",
              "tex": "x=5",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. Prvá rovnica je identita a má nekonečne veľa riešení; druhá je spor a nemá riešenie."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Rovnica "
            },
            {
              "type": "formula",
              "tex": "ax+b=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " má pri "
            },
            {
              "type": "formula",
              "tex": "a\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " riešenie "
            },
            {
              "type": "formula",
              "tex": "x=-b/a",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Ak "
            },
            {
              "type": "formula",
              "tex": "a=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", dostaneme buď spor, alebo identitu."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri vyjadrovaní zo vzorca sleduj podmienky: z "
            },
            {
              "type": "formula",
              "tex": "v=s/t",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " dostaneme "
            },
            {
              "type": "formula",
              "tex": "t=s/v",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " iba pre "
            },
            {
              "type": "formula",
              "tex": "v\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; z "
            },
            {
              "type": "formula",
              "tex": "R=U/I",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " dostaneme "
            },
            {
              "type": "formula",
              "tex": "I=U/R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " iba pre "
            },
            {
              "type": "formula",
              "tex": "R\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Skúšku rob v pôvodnej rovnici."
            }
          ]
        },
        {
          "type": "test",
          "title": "Krátky test: Lineárne rovnice a skúška riešenia",
          "source": "# Krátky test: Lineárne rovnice a skúška riešenia\n\n[ABCD]\nAký je tvar lineárnej rovnice?\n* ax + b = 0, a ≠ 0\n- ax² + b = 0\n- a/x + b = 0\n- ax³ + b = 0\n\n[ABCD]\nČo možno urobiť s oboma stranami rovnice?\n* Pripočítať k nim rovnaký výraz\n- Zmeniť iba ľavú stranu\n- Deliť jednu stranu nulou\n- Odstrániť ľubovoľný člen\n\n[ABCD]\nKoľko riešení má 0x=0?\n* Nekonečne veľa\n- Jedno\n- Žiadne\n- Presne dve\n\n[ABCD]\nNa čo slúži skúška?\n* Na overenie riešenia v pôvodnej rovnici\n- Na určenie stupňa polynómu\n- Na zmenu znamienka nerovnosti\n- Na výpočet determinantu\n",
          "maxScore": 4,
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "instruction",
          "tts": false,
          "content": [
            {
              "type": "text",
              "text": "Vráť sa k prvému odhadu:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": "Zmenil sa po splnení bodovaných úloh? Uveď jednu konkrétnu hodnotu, polohu bodu alebo vlastnosť grafu, ktorá tvoje rozhodnutie podopiera."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zapamätaj si"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Lineárna rovnica: Po úprave má tvar "
            },
            {
              "type": "formula",
              "tex": "ax+b=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Ekvivalentná úprava: Zachová množinu riešení, ak ju správne vykonáme na oboch stranách."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Skúška: Dosadenie koreňa do pôvodnej rovnice overí správnosť."
            }
          ]
        }
      ],
      "eyebrow": "Lekcia 6 z 11",
      "revision": "objavna-verzia-4"
    },
    {
      "id": "kvadraticke-rovnice-metody",
      "courseId": "kurz-algebraicke-zaklady-a-uprava-vyrazov",
      "title": "Kvadratické rovnice: štyri metódy riešenia",
      "custom": true,
      "maxScore": 6,
      "blocks": [
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Ktorá metóda vyrieši danú kvadratickú rovnicu najkratšie?"
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Babylončania dopĺňali na štvorec pred štyrmi tisícročiami"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Starobabylonské tabuľky ukazujú postupy ekvivalentné dopĺňaniu na štvorec. Úlohy boli zapísané slovne a interpretované cez obsahy obdĺžnikov a štvorcov. Dnešný kvadratický vzorec je zhustením geometrickej metódy, ktorá je stará približne štyri tisíc rokov."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Za touto témou je vždy rovnaká vedecká otázka: čo možno tvrdiť na základe merania a čo je iba dojem z obrázka? Odpoveď získame porovnaním viacerých stavov, nie zapamätaním definície. V nasledujúcom modeli preto dostaneš cieľ vyjadrený číslom, polohou alebo vzťahom. Posuvníky a voľné body sú tvoje nástroje; bod za úlohu získaš až po splnení podmienky zapísanej priamo v dátach grafu. Ktorá metóda vyrieši danú kvadratickú rovnicu najkratšie? Po úspechu si výsledok obháj jednou vetou a porovnaj ho s pôvodným odhadom, nie iba so zeleným potvrdením."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "instruction",
          "tts": false,
          "content": [
            {
              "type": "text",
              "text": "Najprv si tipni:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": "Nastav parabolu otvorenú nahor s vrcholom (1, −4). Zapíš si odhad skôr, než pohneš prvým ovládačom."
            }
          ]
        },
        {
          "type": "geogebra",
          "title": "Tri tvary kvadratickej funkcie",
          "app": "graphing",
          "bounds": [
            -6,
            8,
            -8,
            10
          ],
          "commands": [
            "a=1",
            "p=2",
            "q=-3",
            "f(x)=a*(x-p)^2+q",
            "V=(p,q)",
            "vx=p",
            "vy=q"
          ],
          "controls": [
            [
              "a",
              -3,
              3,
              0.25,
              1
            ],
            [
              "p",
              -4,
              4,
              0.25,
              2
            ],
            [
              "q",
              -5,
              5,
              0.25,
              -3
            ]
          ],
          "tasks": [
            {
              "text": "Nastav parabolu otvorenú nahor s vrcholom (1, −4).",
              "condition": "a>0 && p>0.95 && p<1.05 && q>-4.05 && q<-3.95"
            },
            {
              "text": "Nastav parabolu otvorenú nadol, ktorá sa osi x dotýka v bode x=−2.",
              "condition": "a<0 && p>-2.05 && p<-1.95 && q>-0.05 && q<0.05"
            }
          ],
          "expected": [],
          "colors": {
            "f": [
              29,
              78,
              216
            ],
            "V": [
              220,
              38,
              38
            ]
          },
          "fill": {},
          "open": [],
          "preserveStyle": true,
          "toolbar": true,
          "maxScore": 2,
          "tts": false,
          "interactionModel": "bodovana-graficka-uloha"
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Obor a podmienky:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Ak pri konkrétnom príklade nie je napísané inak, základný obor je "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Pri zlomkoch, odmocninách a ďalších obmedzeniach sa navyše zapisuje podmienka "
            },
            {
              "type": "formula",
              "tex": "P",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; riešenie musí patriť do oboru aj spĺňať všetky podmienky."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Kvadratická rovnica má tvar "
            },
            {
              "type": "formula",
              "tex": "ax^2+bx+c=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", kde "
            },
            {
              "type": "formula",
              "tex": "a\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Má najviac dva rôzne reálne korene. Výber metódy závisí od tvaru rovnice."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. Rozklad na súčin"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "x^2-5x+6=(x-2)(x-3)=0.",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Podľa pravidla nulového súčinu je "
            },
            {
              "type": "formula",
              "tex": "x=2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " alebo "
            },
            {
              "type": "formula",
              "tex": "x=3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. Odmocnenie"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "(x-4)^2=9\\quad\\Longrightarrow\\quad x-4=\\pm3\\quad\\Longrightarrow\\quad x=1\\ \\text{alebo}\\ 7.",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri odmocnení nesmieme zabudnúť na znamienko "
            },
            {
              "type": "formula",
              "tex": "\\pm",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. Doplnenie na štvorec"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}x^2-6x+5&=0\\\\\nx^2-6x+9-9+5&=0\\\\\n(x-3)^2&=4\\\\\nx&=1\\ \\text{alebo}\\ 5.\n\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "4. Kvadratický vzorec"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "x_{1,2}=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}.",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Vrcholový a súčinový tvar"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Kvadratickú funkciu môžeme zapisovať v tvare "
            },
            {
              "type": "formula",
              "tex": "f(x)=a(x-p)^2+q",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", kde vrchol je "
            },
            {
              "type": "formula",
              "tex": "V=(p,q)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", alebo v súčinovom tvare "
            },
            {
              "type": "formula",
              "tex": "f(x)=a(x-x_1)(x-x_2)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", ak má reálne korene."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Najprv overte, či je rovnica skutočne kvadratická"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Rovnicu upravíme do normálneho tvaru so zostupnými exponentmi:"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "ax^2+bx+c=0",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Je kvadratická iba vtedy, keď "
            },
            {
              "type": "formula",
              "tex": "a\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Ak sa kvadratické členy vyrušia alebo parameter spôsobí "
            },
            {
              "type": "formula",
              "tex": "a=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", rovnica sa zmení na lineárnu, identitu alebo spor."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Príklad:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "2(x^2-x)+3=x^2+(x-1)^2+4",
          "display": "block",
          "tts": false
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}\n2x^2-2x+3&=x^2+x^2-2x+1+4\\\\\n2x^2-2x+3&=2x^2-2x+5\\\\\n3&=5.\n\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Hoci pôvodná rovnica obsahovala "
            },
            {
              "type": "formula",
              "tex": "x^2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", po úprave je spor a nemá riešenie. Typ rovnice preto definitívne určujeme až po zjednodušení."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Nedeliť faktorom, ktorý môže byť nulový"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "(x-2)^2=x-2",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Podmienky:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Ak vydelíme "
            },
            {
              "type": "formula",
              "tex": "x-2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", stratíme možnosť "
            },
            {
              "type": "formula",
              "tex": "x=2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Správne presunieme všetko na jednu stranu:"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}\n(x-2)^2-(x-2)&=0\\\\\n(x-2)\\bigl((x-2)-1\\bigr)&=0\\\\\n(x-2)(x-3)&=0.\n\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Preto "
            },
            {
              "type": "formula",
              "tex": "S=\\{2,3\\}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Počet riešení pri parametri"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "(m-1)x^2-2x+1=0,\\qquad m\\in\\mathbb R",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Obor:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " "
            },
            {
              "type": "formula",
              "tex": "x\\in\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Najprv oddelíme prípad, keď koeficient pri "
            },
            {
              "type": "formula",
              "tex": "x^2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " zanikne."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Ak "
            },
            {
              "type": "formula",
              "tex": "m=1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", dostaneme lineárnu rovnicu "
            },
            {
              "type": "formula",
              "tex": "-2x+1=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", teda jedno riešenie "
            },
            {
              "type": "formula",
              "tex": "x=\\frac12",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Ak "
            },
            {
              "type": "formula",
              "tex": "m\\ne1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", rovnica je kvadratická a "
            },
            {
              "type": "formula",
              "tex": "\\Delta=(-2)^2-4(m-1)=4(2-m)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "formula",
              "tex": "m<2,\\ m\\ne1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ": "
            },
            {
              "type": "formula",
              "tex": "\\Delta>0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", dve reálne riešenia."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "formula",
              "tex": "m=2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ": "
            },
            {
              "type": "formula",
              "tex": "\\Delta=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", jeden dvojnásobný koreň."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "formula",
              "tex": "m>2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ": "
            },
            {
              "type": "formula",
              "tex": "\\Delta<0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", žiadny reálny koreň."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Tento príklad ukazuje, že pri parametroch sa musí pred použitím kvadratického vzorca skontrolovať podmienka "
            },
            {
              "type": "formula",
              "tex": "a\\ne0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Kontrola výsledku"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Súčet koreňov má podľa Viètových vzťahov byť "
            },
            {
              "type": "formula",
              "tex": "-b/a",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Súčin koreňov má byť "
            },
            {
              "type": "formula",
              "tex": "c/a",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Každý koreň dosadíme do pôvodnej, nie iba do upravenej rovnice, najmä ak sme predtým umocňovali alebo odstraňovali menovatele."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Úlohy na precvičenie"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. Vyriešte rozkladom "
            },
            {
              "type": "formula",
              "tex": "x^2+x-6=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. Vyriešte odmocnením "
            },
            {
              "type": "formula",
              "tex": "(2x-1)^2=25",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. Doplnením na štvorec upravte "
            },
            {
              "type": "formula",
              "tex": "x^2+4x-5",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " do vrcholového tvaru."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "4. Nájdite vrchol funkcie "
            },
            {
              "type": "formula",
              "tex": "f(x)=2(x+1)^2-8",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zobraziť výsledky a postupy"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. "
            },
            {
              "type": "formula",
              "tex": "(x+3)(x-2)=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; "
            },
            {
              "type": "formula",
              "tex": "x=-3,2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. "
            },
            {
              "type": "formula",
              "tex": "2x-1=\\pm5",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; "
            },
            {
              "type": "formula",
              "tex": "x=3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " alebo "
            },
            {
              "type": "formula",
              "tex": "x=-2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. "
            },
            {
              "type": "formula",
              "tex": "x^2+4x-5=(x+2)^2-9",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "4. "
            },
            {
              "type": "formula",
              "tex": "V=(-1,-8)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Spoločný činiteľ alebo ľahko viditeľné korene: rozklad."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Tvar "
            },
            {
              "type": "formula",
              "tex": "(x-a)^2=b",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ": odmocnenie."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Potrebujeme vrcholový tvar: doplnenie na štvorec."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Všeobecný tvar: kvadratický vzorec."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Nikdy nedeľ výrazom obsahujúcim neznámu bez osobitného preverenia prípadu, keď je tento výraz nulový. Takým delením možno stratiť riešenie."
            }
          ]
        },
        {
          "type": "test",
          "title": "Krátky test: Kvadratické rovnice: štyri metódy riešenia",
          "source": "# Krátky test: Kvadratické rovnice: štyri metódy riešenia\n\n[ABCD]\nČo musí platiť pre koeficient a v kvadratickej rovnici?\n* a ≠ 0\n- a = 0\n- a > 1\n- a musí byť celé\n\n[ABCD]\nČo vyplýva z (x−2)(x+1)=0?\n* x=2 alebo x=−1\n- x=1 iba\n- x=−2 alebo 1\n- x=0\n\n[ABCD]\nAký je vrchol funkcie a(x−p)²+q?\n* [p,q]\n- [−p,q]\n- [a,q]\n- [p,a]\n\n[ABCD]\nNa čo nesmieme zabudnúť pri odmocnení A²=k?\n* Na znamienko ±\n- Na determinant\n- Na delenie nulou\n- Na zmenu všetkých koeficientov\n",
          "maxScore": 4,
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "instruction",
          "tts": false,
          "content": [
            {
              "type": "text",
              "text": "Vráť sa k prvému odhadu:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": "Zmenil sa po splnení bodovaných úloh? Uveď jednu konkrétnu hodnotu, polohu bodu alebo vlastnosť grafu, ktorá tvoje rozhodnutie podopiera."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zapamätaj si"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Kvadratická rovnica: Má tvar "
            },
            {
              "type": "formula",
              "tex": "ax^{2}+bx+c=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", "
            },
            {
              "type": "formula",
              "tex": "a\\ne 0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Nulový súčin: Ak "
            },
            {
              "type": "formula",
              "tex": "AB=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", potom "
            },
            {
              "type": "formula",
              "tex": "A=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " alebo "
            },
            {
              "type": "formula",
              "tex": "B=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Doplnenie na štvorec: Premení všeobecný tvar na vrcholový tvar."
            }
          ]
        }
      ],
      "eyebrow": "Lekcia 7 z 11",
      "revision": "objavna-verzia-4"
    },
    {
      "id": "nelinearne-rovnice-a-podmienky",
      "courseId": "kurz-algebraicke-zaklady-a-uprava-vyrazov",
      "title": "Nelineárne rovnice a definičné podmienky",
      "custom": true,
      "maxScore": 6,
      "blocks": [
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Prečo môže správne vyzerajúci výpočet vytvoriť neprípustné riešenie?"
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Úvodná výzva"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "hook",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Výzva:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": "Prečo môže správne vyzerajúci výpočet vytvoriť neprípustné riešenie?"
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Odmocniny prinútili matematikov kontrolovať výsledky"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri starých postupoch riešenia rovníc sa často objavili kandidáti, ktorí po spätnom dosadení nefungovali. Umocnenie totiž zabúda na znamienko: čísla a a -a majú rovnaký štvorec. Skúška v pôvodnej rovnici sa preto stala neoddeliteľnou súčasťou bezpečného riešenia."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Historický krok bol dôležitý najmä preto, že premenil obraz na postup, ktorý sa dal zopakovať. Aj ty začneš bez hotového pravidla. Skús si vopred predstaviť výsledok, potom upravuj iba tie veličiny, ktoré sú v modeli voľné, a sleduj pomenované čísla alebo polohy. Úloha je nastavená tak, aby nestačilo trafiť jednu očividnú hodnotu; musíš skombinovať viac podmienok a skontrolovať, či výsledný obraz dáva zmysel. Prečo môže správne vyzerajúci výpočet vytvoriť neprípustné riešenie? Po úspechu si výsledok obháj jednou vetou a porovnaj ho s pôvodným odhadom, nie iba so zeleným potvrdením."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "instruction",
          "tts": false,
          "content": [
            {
              "type": "text",
              "text": "Najprv si tipni:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": "Nastav priamku tak, aby sa odmocninovej krivky iba dotýkala. Zapíš si odhad skôr, než pohneš prvým ovládačom."
            }
          ]
        },
        {
          "type": "geogebra",
          "title": "Odmocninová rovnica ako priesečník",
          "app": "graphing",
          "bounds": [
            -2,
            7,
            -3,
            5
          ],
          "commands": [
            "f(x)=sqrt(x+1)",
            "p=Slider(-2,2,0.05,1,150,false,true,false,false)",
            "SetValue(p,1)",
            "g(x)=x-p",
            "Delta=4*p+5"
          ],
          "controls": [],
          "tasks": [
            {
              "text": "Nastav priamku tak, aby sa odmocninovej krivky iba dotýkala.",
              "condition": "Delta>-0.03 && Delta<0.03"
            },
            {
              "text": "Nastav parameter tak, aby mala rovnica dva reálne priesečníky a p bolo kladné.",
              "condition": "Delta>0.5 && p>0"
            }
          ],
          "expected": [],
          "colors": {
            "f": [
              29,
              78,
              216
            ],
            "g": [
              220,
              38,
              38
            ]
          },
          "fill": {},
          "open": [],
          "preserveStyle": true,
          "toolbar": true,
          "maxScore": 2,
          "tts": false,
          "interactionModel": "bodovana-graficka-uloha"
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Obor a podmienky:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Ak pri konkrétnom príklade nie je napísané inak, základný obor je "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Pri zlomkoch, odmocninách a ďalších obmedzeniach sa navyše zapisuje podmienka "
            },
            {
              "type": "formula",
              "tex": "P",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; riešenie musí patriť do oboru aj spĺňať všetky podmienky."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Nelineárna rovnica obsahuje neznámu inak než iba v prvej mocnine: môže obsahovať "
            },
            {
              "type": "formula",
              "tex": "x^2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", súčin premenných, neznámu v menovateli, odmocninu, absolútnu hodnotu, exponenciálnu alebo logaritmickú funkciu."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Racionálna rovnica"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}\\frac{x+1}{x-2}&=3,\\qquad x\\ne2,\\\\\nx+1&=3(x-2),\\\\\n7&=2x,\\\\\nx&=\\frac72.\n\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Hodnota "
            },
            {
              "type": "formula",
              "tex": "\\frac72",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " spĺňa podmienku "
            },
            {
              "type": "formula",
              "tex": "x\\ne2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Odmocninová rovnica"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}\\sqrt{x+1}&=x-1,\\\\\nx&\\ge1,\\\\\nx+1&=(x-1)^2,\\\\\nx^2-3x&=0,\\\\\nx&\\in\\{0,3\\}.\n\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Kandidát "
            },
            {
              "type": "formula",
              "tex": "x=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " nevyhovuje podmienke ani pôvodnej rovnici. Jediným riešením je "
            },
            {
              "type": "formula",
              "tex": "x=3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Umocnenie môže vytvoriť "
            },
            {
              "type": "text",
              "text": "nepravé riešenie",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Absolútna hodnota"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "|2x-3|=5\\quad\\Longleftrightarrow\\quad 2x-3=5\\ \\text{alebo}\\ 2x-3=-5.",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Riešenia sú "
            },
            {
              "type": "formula",
              "tex": "x=4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a "
            },
            {
              "type": "formula",
              "tex": "x=-1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Substitúcia"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "V rovnici "
            },
            {
              "type": "formula",
              "tex": "x^4-5x^2+4=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " položme "
            },
            {
              "type": "formula",
              "tex": "t=x^2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Dostaneme "
            },
            {
              "type": "formula",
              "tex": "t^2-5t+4=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", teda "
            },
            {
              "type": "formula",
              "tex": "t=1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " alebo "
            },
            {
              "type": "formula",
              "tex": "t=4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Preto "
            },
            {
              "type": "formula",
              "tex": "x=\\pm1,\\pm2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Rozšírenie: kandidát nie je automaticky riešenie"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri nelineárnych rovniciach často používame kroky, ktoré nie sú obojstranne ekvivalentné. Preto rozlišujeme:"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "text",
              "text": "kandidát",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " – hodnota získaná z upravenej rovnice,"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "text",
              "text": "riešenie",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " – kandidát, ktorý patrí do oboru, spĺňa podmienky a po dosadení vyhovuje pôvodnej rovnici."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Operácia — Riziko — Ochrana"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "násobenie výrazom s neznámou — môže pridať nuly tohto výrazu — zapísať, že násobiteľ je nenulový, alebo vykonať skúšku"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "delenie výrazom s neznámou — môže odstrániť riešenie, kde je deliteľ nulový — rozdeliť výpočet na prípady"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "umocnenie párnou mocninou — môže pridať riešenia s opačným znamienkom — skúška v pôvodnej rovnici"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "odmocnenie — môže zabudnúť zápornú vetvu — použiť "
            },
            {
              "type": "formula",
              "tex": "\\sqrt{x^2}=|x|",
              "display": "inline",
              "tts": false
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "krátenie spoločného činiteľa — môže skryť pôvodnú zakázanú hodnotu — podmienku ponechať až do konca"
            }
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Racionálna rovnica so skrytým zakázaným bodom"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\frac{x^2-1}{x-1}=0",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Podmienky:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R,\\ P:x\\ne1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\frac{(x-1)(x+1)}{x-1}=0\\Longleftrightarrow x+1=0,\\qquad x\\ne1",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Dostaneme "
            },
            {
              "type": "formula",
              "tex": "x=-1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Hodnota "
            },
            {
              "type": "formula",
              "tex": "x=1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " nie je riešením, hoci po skrátení ju v novom výraze už nevidíme."
            }
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Odmocninová rovnica a nepravý koreň"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\sqrt{x+5}=x-1",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Podmienky:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " pod odmocninou "
            },
            {
              "type": "formula",
              "tex": "x+5\\ge0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a pravá strana musí byť nezáporná, teda spolu "
            },
            {
              "type": "formula",
              "tex": "P:x\\ge1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}\n\\sqrt{x+5}=x-1&\\Longrightarrow x+5=(x-1)^2\\\\\n&\\Longrightarrow x^2-3x-4=0\\\\\n&\\Longrightarrow (x-4)(x+1)=0.\n\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Kandidáti sú "
            },
            {
              "type": "formula",
              "tex": "x=4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a "
            },
            {
              "type": "formula",
              "tex": "x=-1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Druhý porušuje "
            },
            {
              "type": "formula",
              "tex": "x\\ge1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Skúška prvého: "
            },
            {
              "type": "formula",
              "tex": "\\sqrt9=3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Preto "
            },
            {
              "type": "formula",
              "tex": "S=\\{4\\}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Rovnica s dvoma odmocninami"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\sqrt{x+1}+\\sqrt{x-2}=3",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Podmienky:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R,\\ P:x\\ge2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Izolujeme jednu odmocninu a až potom umocníme:"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}\n\\sqrt{x+1}&=3-\\sqrt{x-2}\\\\\nx+1&=9-6\\sqrt{x-2}+x-2\\\\\n6\\sqrt{x-2}&=6\\\\\n\\sqrt{x-2}&=1\\\\\nx&=3.\n\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Skúška: "
            },
            {
              "type": "formula",
              "tex": "\\sqrt4+\\sqrt1=2+1=3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Pri dvoch odmocninách môže byť potrebné umocňovať dvakrát; po každom umocnení rastie význam záverečnej skúšky."
            }
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Bikvadratická rovnica a substitúcia"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "x^4-5x^2+4=0",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Podmienky:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Položíme "
            },
            {
              "type": "formula",
              "tex": "t=x^2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", preto pri reálnych riešeniach navyše "
            },
            {
              "type": "formula",
              "tex": "t\\ge0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}\nt^2-5t+4&=0\\\\\n(t-1)(t-4)&=0\\\\\nt&=1\\ \\lor\\ t=4\\\\\nx^2&=1\\ \\lor\\ x^2=4\\\\\nx&=\\pm1\\ \\lor\\ x=\\pm2.\n\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Množina riešení je "
            },
            {
              "type": "formula",
              "tex": "S=\\{-2,-1,1,2\\}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Substitúcia nesmie zabudnúť na spätné dosadenie."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Ako odhadnúť a potvrdiť počet riešení"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. Určte definičný obor a podmienky."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. Graficky odhadnite počet priesečníkov ľavej a pravej strany."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. Algebraicky získajte všetkých kandidátov."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "4. Vylúčte zakázané a nepravé korene."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "5. Počet prvkov výslednej množiny "
            },
            {
              "type": "formula",
              "tex": "S",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je počet riešení."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Graf je užitočná kontrola, ale presné riešenie musí vychádzať z výpočtu alebo z dôkazu o počte priesečníkov."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Úlohy na precvičenie"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. Vyriešte "
            },
            {
              "type": "formula",
              "tex": "\\frac{2x}{x-1}=4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. Vyriešte "
            },
            {
              "type": "formula",
              "tex": "|x+2|=7",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. Vyriešte "
            },
            {
              "type": "formula",
              "tex": "\\sqrt{2x+3}=x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a vykonajte skúšku."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "4. Použite substitúciu v "
            },
            {
              "type": "formula",
              "tex": "x^4-13x^2+36=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zobraziť výsledky a postupy"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. Podmienka "
            },
            {
              "type": "formula",
              "tex": "x\\ne1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; "
            },
            {
              "type": "formula",
              "tex": "2x=4x-4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", takže "
            },
            {
              "type": "formula",
              "tex": "x=2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. "
            },
            {
              "type": "formula",
              "tex": "x+2=7",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " alebo "
            },
            {
              "type": "formula",
              "tex": "x+2=-7",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; "
            },
            {
              "type": "formula",
              "tex": "x=5,-9",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. Podmienka "
            },
            {
              "type": "formula",
              "tex": "x\\ge0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Po umocnení "
            },
            {
              "type": "formula",
              "tex": "x^2-2x-3=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", kandidáti "
            },
            {
              "type": "formula",
              "tex": "3,-1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; vyhovuje iba "
            },
            {
              "type": "formula",
              "tex": "x=3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "4. "
            },
            {
              "type": "formula",
              "tex": "t=x^2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ": "
            },
            {
              "type": "formula",
              "tex": "t^2-13t+36=(t-4)(t-9)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; "
            },
            {
              "type": "formula",
              "tex": "x=\\pm2,\\pm3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Za nelineárnu považujeme rovnicu, ktorú po úprave nemožno zapísať v tvare "
            },
            {
              "type": "formula",
              "tex": "ax+b=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Pri umocnení na párnu mocninu používame dôsledkovú šípku a na konci skúšku."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Príklad: "
            },
            {
              "type": "formula",
              "tex": "\\sqrt{x+1}=x-1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " vyžaduje "
            },
            {
              "type": "formula",
              "tex": "x\\ge1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Po umocnení vznikne "
            },
            {
              "type": "formula",
              "tex": "x+1=(x-1)^2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", teda kandidáti "
            },
            {
              "type": "formula",
              "tex": "x=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a "
            },
            {
              "type": "formula",
              "tex": "x=3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Podmienku aj pôvodnú rovnicu spĺňa iba "
            },
            {
              "type": "formula",
              "tex": "x=3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri "
            },
            {
              "type": "formula",
              "tex": "|2x-3|=5",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " riešime dve vetvy: "
            },
            {
              "type": "formula",
              "tex": "2x-3=5",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " alebo "
            },
            {
              "type": "formula",
              "tex": "2x-3=-5",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "test",
          "title": "Krátky test: Nelineárne rovnice a definičné podmienky",
          "source": "# Krátky test: Nelineárne rovnice a definičné podmienky\n\n[ABCD]\nPrečo robíme skúšku po umocnení rovnice?\n* Môžu vzniknúť nepravé riešenia\n- Zmení sa stupeň polynómu na nulu\n- Menovateľ musí byť kladný\n- Aby vznikol determinant\n\n[ABCD]\nAká podmienka platí pre 1/(x−2)?\n* x ≠ 2\n- x > 2\n- x = 2\n- x < 0\n\n[ABCD]\nAko riešime |A|=k pre k>0?\n* A=k alebo A=−k\n- Iba A=k\n- A²=k\n- A=0\n\n[ABCD]\nKtorá rovnica je nelineárna?\n* x² − 3x = 0\n- 2x+1=5\n- x−7=0\n- 3x=12\n",
          "maxScore": 4,
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "instruction",
          "tts": false,
          "content": [
            {
              "type": "text",
              "text": "Vráť sa k prvému odhadu:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": "Zmenil sa po splnení bodovaných úloh? Uveď jednu konkrétnu hodnotu, polohu bodu alebo vlastnosť grafu, ktorá tvoje rozhodnutie podopiera."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zapamätaj si"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Nelineárna rovnica: Obsahuje mocniny vyššie než 1 alebo inú nelineárnu operáciu."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Podmienky: Určujeme ich pred úpravami, najmä pri zlomkoch a odmocninách."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Nepravý koreň: Môže vzniknúť napríklad umocnením; preto robíme skúšku."
            }
          ]
        }
      ],
      "eyebrow": "Lekcia 8 z 11",
      "revision": "objavna-verzia-4"
    },
    {
      "id": "nerovnice-a-znamenkova-tabulka",
      "courseId": "kurz-algebraicke-zaklady-a-uprava-vyrazov",
      "title": "Nerovnice a znamienková tabuľka",
      "custom": true,
      "maxScore": 6,
      "blocks": [
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Prečo sa pri násobení záporným číslom obráti znak nerovnosti?"
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Znaky menší a väčší zaviedol Thomas Harriot"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "formula",
              "tex": "Symboly < a",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " > sa objavili v posmrtne vydanej knihe Thomasa Harriota z roku 1631. Predtým sa nerovnosti zapisovali slovami. Dvojica jednoduchých značiek výrazne uľahčila prácu s intervalmi, odhadmi a porovnávaním výrazov."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Takýto problém sa nedal vyriešiť pomenovaním nového pojmu. Bolo potrebné nájsť veličinu, ktorú možno meniť, výsledok, ktorý možno odmerať, a hraničný prípad, na ktorom sa nesprávna predstava odhalí. Presne to urobíš aj teraz. Najprv si zvolíš odhad, potom budeš posúvať ovládače alebo body a graf uzná úlohu až vtedy, keď dosiahneš požadovaný matematický stav. Prečo sa pri násobení záporným číslom obráti znak nerovnosti? Po úspechu si výsledok obháj jednou vetou a porovnaj ho s pôvodným odhadom, nie iba so zeleným potvrdením."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "instruction",
          "tts": false,
          "content": [
            {
              "type": "text",
              "text": "Najprv si tipni:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": "Nastav vodorovnú hranicu tak, aby priesečník s priamkou mal x-ovú súradnicu približne 1. Zapíš si odhad skôr, než pohneš prvým ovládačom."
            }
          ]
        },
        {
          "type": "geogebra",
          "title": "Lineárna nerovnica na grafe",
          "app": "graphing",
          "bounds": [
            -5,
            7,
            -8,
            12
          ],
          "commands": [
            "f(x)=-3*x+6",
            "k=Slider(-3,6,0.1,1,150,false,true,false,false)",
            "SetValue(k,0)",
            "g(x)=k",
            "r=(6-k)/3",
            "R=(r,k)"
          ],
          "controls": [],
          "tasks": [
            {
              "text": "Nastav vodorovnú hranicu tak, aby priesečník s priamkou mal x-ovú súradnicu približne 1.",
              "condition": "r>0.95 && r<1.05"
            },
            {
              "text": "Nastav hranicu tak, aby priesečník ležal približne v bode (2, 0).",
              "condition": "r>1.95 && r<2.05 && k>-0.05 && k<0.05"
            }
          ],
          "expected": [],
          "colors": {
            "f": [
              29,
              78,
              216
            ],
            "R": [
              220,
              38,
              38
            ]
          },
          "fill": {},
          "open": [],
          "preserveStyle": true,
          "toolbar": true,
          "maxScore": 2,
          "tts": false,
          "interactionModel": "bodovana-graficka-uloha"
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Obor a podmienky:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Ak pri konkrétnom príklade nie je napísané inak, základný obor je "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Pri zlomkoch, odmocninách a ďalších obmedzeniach sa navyše zapisuje podmienka "
            },
            {
              "type": "formula",
              "tex": "P",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; riešenie musí patriť do oboru aj spĺňať všetky podmienky."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Nerovnica používa znaky "
            },
            {
              "type": "formula",
              "tex": "<,\\ >,\\ \\le,\\ \\ge",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Riešením zvyčajne nie je jedno číslo, ale množina alebo interval."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Ekvivalentné úpravy"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri pripočítaní rovnakého výrazu sa znak nemení. Pri násobení alebo delení "
            },
            {
              "type": "text",
              "text": "záporným",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " číslom sa znak obráti:"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "a<b\\quad\\Longrightarrow\\quad -a>-b.",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Lineárna nerovnica"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}-3x+6&>0\\\\-3x&>-6\\\\x&<2.\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Po delení číslom "
            },
            {
              "type": "formula",
              "tex": "-3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " sme obrátili znak. Intervalový zápis je "
            },
            {
              "type": "formula",
              "tex": "(-\\infty,2)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Súčinová nerovnica"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "(x-1)(x+4)\\le0.",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Kritické body sú "
            },
            {
              "type": "formula",
              "tex": "-4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a "
            },
            {
              "type": "formula",
              "tex": "1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Tie rozdelia os na intervaly. Súčinu vyhovuje stredný interval a pri neostrej nerovnosti zahrnieme aj nulové body:"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "x\\in[-4,1].",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Znamienková tabuľka"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "V každom intervale stačí skúšobný bod. Znamienko sa môže meniť iba v nulovom bode činiteľa alebo v bode, kde výraz nie je definovaný."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Ktoré operácie menia smer nerovnosti"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Pripočítanie alebo odčítanie rovnakého výrazu smer nemení."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Násobenie alebo delenie kladným číslom smer nemení."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Násobenie alebo delenie záporným číslom smer "
            },
            {
              "type": "text",
              "text": "obráti",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Násobenie výrazom s neznámym znamienkom nemožno urobiť bez rozdelenia na prípady."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "a<b,\\ c<0\\quad\\Longrightarrow\\quad ac>bc",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Prečo nesmieme bezhlavo odstrániť menovateľ"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\frac{2-x}{x+1}\\ge0",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Podmienky:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R,\\ P:x\\ne-1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Nemôžeme jednoducho násobiť výrazom "
            },
            {
              "type": "formula",
              "tex": "x+1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", pretože pre "
            },
            {
              "type": "formula",
              "tex": "x<-1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je záporný a pre "
            },
            {
              "type": "formula",
              "tex": "x>-1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " kladný. Namiesto toho použijeme kritické body "
            },
            {
              "type": "formula",
              "tex": "-1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a "
            },
            {
              "type": "formula",
              "tex": "2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a znamienkovú tabuľku."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Výsledok je "
            },
            {
              "type": "formula",
              "tex": "S=(-1,2]",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Bod "
            },
            {
              "type": "formula",
              "tex": "-1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je vylúčený menovateľom, bod "
            },
            {
              "type": "formula",
              "tex": "2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je zahrnutý, pretože nerovnosť obsahuje znak "
            },
            {
              "type": "formula",
              "tex": "\\ge",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Dvojitá nerovnica"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "-3<2x+1\\le7",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Operáciu vykonávame vo všetkých troch častiach:"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}\n-3-1&<2x\\le7-1\\\\\n-4&<2x\\le6\\\\\n-2&<x\\le3.\n\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Úlohy na precvičenie"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. Vyriešte "
            },
            {
              "type": "formula",
              "tex": "5x-10\\le0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. Vyriešte "
            },
            {
              "type": "formula",
              "tex": "-2x+7>3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. Vyriešte "
            },
            {
              "type": "formula",
              "tex": "(x-5)(x+2)>0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zobraziť výsledky a postupy"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. "
            },
            {
              "type": "formula",
              "tex": "x\\le2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", teda "
            },
            {
              "type": "formula",
              "tex": "(-\\infty,2]",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. "
            },
            {
              "type": "formula",
              "tex": "-2x>-4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", po delení záporným číslom "
            },
            {
              "type": "formula",
              "tex": "x<2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. Kritické body "
            },
            {
              "type": "formula",
              "tex": "-2,5",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; súčin je kladný mimo nich: "
            },
            {
              "type": "formula",
              "tex": "(-\\infty,-2)\\cup(5,\\infty)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri prechode cez koreň nepárnej násobnosti sa znamienko súčinu mení; pri párnej násobnosti zostáva rovnaké. Napríklad "
            },
            {
              "type": "formula",
              "tex": "(x-1)^2(x+2)<0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je záporné iba pre "
            },
            {
              "type": "formula",
              "tex": "x<-2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Nerovnicu nemožno bez rozboru násobiť výrazom s neznámym znamienkom: pri zápornom násobiteľovi sa znak otočí, pri kladnom nie a pri nulovom môže vzniknúť strata informácie."
            }
          ]
        },
        {
          "type": "test",
          "title": "Krátky test: Nerovnice a znamienková tabuľka",
          "source": "# Krátky test: Nerovnice a znamienková tabuľka\n\n[ABCD]\nKedy sa obráti znak nerovnosti?\n* Pri násobení alebo delení záporným číslom\n- Pri každom sčítaní\n- Pri delení kladným číslom\n- Nikdy\n\n[ABCD]\nAký interval zapisuje x<2?\n* (−∞,2)\n- [−∞,2]\n- (2,∞)\n- [2,∞)\n\n[ABCD]\nMôže nulový bod patriť do riešenia pri ≤?\n* Áno\n- Nie nikdy\n- Iba ak je menovateľom\n- Iba pri lineárnej rovnici\n\n[ABCD]\nNa čo slúži skúšobný bod v znamienkovej tabuľke?\n* Určí znamienko výrazu v intervale\n- Vypočíta determinant\n- Určí stupeň polynómu\n- Nahradí definičný obor\n",
          "maxScore": 4,
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "instruction",
          "tts": false,
          "content": [
            {
              "type": "text",
              "text": "Vráť sa k prvému odhadu:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": "Zmenil sa po splnení bodovaných úloh? Uveď jednu konkrétnu hodnotu, polohu bodu alebo vlastnosť grafu, ktorá tvoje rozhodnutie podopiera."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zapamätaj si"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Obrátenie znaku: Nastáva pri násobení alebo delení záporným číslom."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Kritické body: Nulové body činiteľov a vylúčené body menovateľa."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Neostrá nerovnosť: "
            },
            {
              "type": "formula",
              "tex": "Znaky \\le a",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " ≥ môžu zahrnúť nulové body výrazu."
            }
          ]
        }
      ],
      "eyebrow": "Lekcia 9 z 11",
      "revision": "objavna-verzia-4"
    },
    {
      "id": "kvadraticke-a-racionalne-nerovnice",
      "courseId": "kurz-algebraicke-zaklady-a-uprava-vyrazov",
      "title": "Kvadratické a racionálne nerovnice",
      "custom": true,
      "maxScore": 8,
      "blocks": [
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Ako z nulových a zakázaných bodov zostavíme správne intervaly riešenia?"
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Descartovo pravidlo znamienok"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "René Descartes v roku 1637 opísal pravidlo, ktoré spája zmeny znamienok koeficientov polynómu s možným počtom kladných koreňov. Nie je to tá istá metóda ako dnešná znamienková tabuľka, no ukazuje, ako dôležitým zdrojom informácie bolo znamienko ešte pred rozvojom moderných grafov."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Na stole by vtedy neležal hotový vzorec, iba údaje a otázka, ktorú bolo treba rozhodnúť. Užitočný nápad vzniká vtedy, keď sa neurčité slová nahradia meraním: zmeníš jednu hodnotu, sleduješ následok a porovnáš ho s ďalším prípadom. Rovnaký postup použiješ v interaktívnom modeli. Cieľ nebude splnený približným dojmom, ale až konkrétnou hodnotou alebo vzťahom medzi objektmi. Ako z nulových a zakázaných bodov zostavíme správne intervaly riešenia? Po úspechu si výsledok obháj jednou vetou a porovnaj ho s pôvodným odhadom, nie iba so zeleným potvrdením."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "instruction",
          "tts": false,
          "content": [
            {
              "type": "text",
              "text": "Najprv si tipni:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": "Nastav parabolu tak, aby v strede medzi koreňmi mala hodnotu približne −0,5. Zapíš si odhad skôr, než pohneš prvým ovládačom."
            }
          ]
        },
        {
          "type": "geogebra",
          "title": "Kvadratická nerovnica a orientácia paraboly",
          "app": "graphing",
          "bounds": [
            -2,
            7,
            -8,
            10
          ],
          "commands": [
            "a=1",
            "f(x)=a*(x-2)*(x-3)",
            "ymid=f(2.5)"
          ],
          "controls": [
            [
              "a",
              -3,
              3,
              0.25,
              1
            ]
          ],
          "tasks": [
            {
              "text": "Nastav parabolu tak, aby v strede medzi koreňmi mala hodnotu približne −0,5.",
              "condition": "ymid>-0.52 && ymid<-0.48"
            },
            {
              "text": "Obráť parabolu tak, aby v strede medzi koreňmi mala hodnotu približne 0,5.",
              "condition": "ymid>0.48 && ymid<0.52"
            }
          ],
          "expected": [],
          "colors": {
            "f": [
              29,
              78,
              216
            ]
          },
          "fill": {},
          "open": [],
          "preserveStyle": true,
          "toolbar": true,
          "maxScore": 2,
          "tts": false,
          "interactionModel": "bodovana-graficka-uloha"
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Obor a podmienky:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Ak pri konkrétnom príklade nie je napísané inak, základný obor je "
            },
            {
              "type": "formula",
              "tex": "U=\\mathbb R",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Pri zlomkoch, odmocninách a ďalších obmedzeniach sa navyše zapisuje podmienka "
            },
            {
              "type": "formula",
              "tex": "P",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; riešenie musí patriť do oboru aj spĺňať všetky podmienky."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Kvadratická nerovnica"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Najprv nájdeme korene kvadratického trojčlena a určíme orientáciu paraboly."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "x^2-5x+6\\le0\\quad\\Longleftrightarrow\\quad(x-2)(x-3)\\le0.",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Parabola je otvorená nahor, preto je výraz záporný medzi koreňmi. Výsledok je "
            },
            {
              "type": "formula",
              "tex": "x\\in[2,3]",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Všeobecné znamienka"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Ak "
            },
            {
              "type": "formula",
              "tex": "a>0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a existujú dva korene "
            },
            {
              "type": "formula",
              "tex": "x_1<x_2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", potom je kvadratický výraz kladný mimo koreňov a záporný medzi nimi. Pri "
            },
            {
              "type": "formula",
              "tex": "a<0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " sú znamienka opačné."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Ak "
            },
            {
              "type": "formula",
              "tex": "\\Delta<0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", kvadratický výraz nemení znamienko: má stále znamienko koeficientu "
            },
            {
              "type": "formula",
              "tex": "a",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Racionálna nerovnica"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\frac{2x-1}{x+3}\\ge0.",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Kritické body sú "
            },
            {
              "type": "formula",
              "tex": "x=\\frac12",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " z čitateľa a "
            },
            {
              "type": "formula",
              "tex": "x=-3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " z menovateľa. Bod "
            },
            {
              "type": "formula",
              "tex": "-3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " nikdy nesmie patriť do riešenia. Znamienková tabuľka dá:"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "x\\in(-\\infty,-3)\\cup\\left[\\frac12,\\infty\\right).",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Dôležité pravidlo"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Nerovnicu so zlomkom neriešime bezhlavým násobením menovateľom, ak nepoznáme jeho znamienko. Bezpečný postup je previesť všetko na jednu stranu, rozložiť čitateľa a menovateľa a zostaviť znamienkovú tabuľku."
            }
          ]
        },
        {
          "type": "geogebra",
          "title": "Racionálna nerovnica",
          "app": "graphing",
          "bounds": [
            -8,
            7,
            -8,
            8
          ],
          "commands": [
            "asym: x=-3",
            "c=Slider(-6,6,0.1,1,150,false,true,false,false)",
            "SetValue(c,1)",
            "f(x)=(2*x-c)/(x+3)",
            "N=(c/2,0)",
            "gap=c/2+3"
          ],
          "controls": [],
          "tasks": [
            {
              "text": "Nastav nulový bod presne 2 jednotky napravo od zvislej asymptoty.",
              "condition": "gap>1.95 && gap<2.05"
            },
            {
              "text": "Nastav nulový bod do počiatku.",
              "condition": "c>-0.02 && c<0.02"
            }
          ],
          "expected": [],
          "colors": {
            "f": [
              29,
              78,
              216
            ],
            "asym": [
              220,
              38,
              38
            ],
            "N": [
              22,
              163,
              74
            ]
          },
          "fill": {},
          "open": [],
          "preserveStyle": true,
          "toolbar": true,
          "maxScore": 2,
          "tts": false,
          "interactionModel": "bodovana-graficka-uloha"
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Racionálna nerovnica: nikdy nekrížovo nenásobte bez znalosti znamienka"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri rovnici možno po zapísaní podmienok odstrániť nenulový menovateľ. Pri nerovnici však znamienko menovateľa rozhoduje, či sa znak obráti. Preto všetko prenesieme na jednu stranu, rozložíme čitateľ a menovateľ a použijeme znamienkovú tabuľku."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\frac{(x-1)(x+3)}{(x-2)^2}\\le0,\\qquad U=\\mathbb R,\\ P:x\\ne2",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Menovateľ "
            },
            {
              "type": "formula",
              "tex": "(x-2)^2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je pre všetky dovolené hodnoty kladný, takže znamienko určuje čitateľ. Čitateľ je nekladný medzi koreňmi "
            },
            {
              "type": "formula",
              "tex": "-3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a "
            },
            {
              "type": "formula",
              "tex": "1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Bod "
            },
            {
              "type": "formula",
              "tex": "2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " v tomto intervale neleží. Výsledok je "
            },
            {
              "type": "formula",
              "tex": "S=[-3,1]",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Ak by zakázaný bod ležal v riešenom intervale, museli by sme interval rozdeliť. Napríklad z "
            },
            {
              "type": "formula",
              "tex": "[-3,4]",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a podmienky "
            },
            {
              "type": "formula",
              "tex": "x\\ne2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " vznikne "
            },
            {
              "type": "formula",
              "tex": "[-3,2)\\cup(2,4]",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Úlohy na precvičenie"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. Vyriešte "
            },
            {
              "type": "formula",
              "tex": "x^2+2x-3>0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. Vyriešte "
            },
            {
              "type": "formula",
              "tex": "-x^2+4x-3\\ge0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. Vyriešte "
            },
            {
              "type": "formula",
              "tex": "\\frac{x-2}{x+1}<0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zobraziť výsledky a postupy"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1. "
            },
            {
              "type": "formula",
              "tex": "(x+3)(x-1)>0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; "
            },
            {
              "type": "formula",
              "tex": "(-\\infty,-3)\\cup(1,\\infty)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "2. Korene sú 1 a 3, parabola je nad osou medzi nimi: "
            },
            {
              "type": "formula",
              "tex": "[1,3]",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "3. Kritické body "
            },
            {
              "type": "formula",
              "tex": "-1,2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "; záporný interval je "
            },
            {
              "type": "formula",
              "tex": "(-1,2)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Bod "
            },
            {
              "type": "formula",
              "tex": "-1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je vylúčený."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Nulové body čitateľa môžu patriť do riešenia pri neostrej nerovnosti. Nulové body menovateľa sú vždy zakázané. Pri párnej násobnosti sa znamienko pri kritickom bode nemusí zmeniť."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Výsledok zapisuj intervalovo aj na číselnej osi. Pri kvadratickom výraze treba rozlíšiť prípady "
            },
            {
              "type": "formula",
              "tex": "\\Delta<0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", "
            },
            {
              "type": "formula",
              "tex": "\\Delta=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", "
            },
            {
              "type": "formula",
              "tex": "\\Delta>0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a znamienko vedúceho koeficientu."
            }
          ]
        },
        {
          "type": "test",
          "title": "Krátky test: Kvadratické a racionálne nerovnice",
          "source": "# Krátky test: Kvadratické a racionálne nerovnice\n\n[ABCD]\nKde je parabola s a>0 a dvoma koreňmi záporná?\n* Medzi koreňmi\n- Mimo koreňov\n- Iba v ľavom koreni\n- Nikde\n\n[ABCD]\nMôže bod, v ktorom je menovateľ nulový, patriť do riešenia?\n* Nie\n- Áno pri ≥\n- Áno pri ≤\n- Áno vždy\n\n[ABCD]\nČo urobíme najprv pri kvadratickej nerovnici?\n* Nájdeme korene a orientáciu paraboly\n- Vypočítame determinant matice\n- Zderivujeme výraz\n- Vždy vydelíme x\n\n[ABCD]\nAk Δ<0 a a>0, aké je znamienko trojčlena?\n* Všade kladné\n- Všade záporné\n- Strieda sa v nule\n- Nie je definované\n",
          "maxScore": 4,
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "instruction",
          "tts": false,
          "content": [
            {
              "type": "text",
              "text": "Vráť sa k prvému odhadu:",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": "Zmenil sa po splnení bodovaných úloh? Uveď jednu konkrétnu hodnotu, polohu bodu alebo vlastnosť grafu, ktorá tvoje rozhodnutie podopiera."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zapamätaj si"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Kvadratická nerovnica: Riešenie čítame zo znamienka paraboly vzhľadom na os x."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• Racionálna nerovnica: Nulové body čitateľa môžu byť zahrnuté; nulové body menovateľa nikdy."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "• "
            },
            {
              "type": "formula",
              "tex": "Diskriminant < 0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ": Kvadratický výraz má stále znamienko vedúceho koeficientu."
            }
          ]
        }
      ],
      "eyebrow": "Lekcia 10 z 11",
      "revision": "objavna-verzia-4"
    },
    {
      "id": "finalne-cvicenie-vsetky-priklady",
      "courseId": "kurz-algebraicke-zaklady-a-uprava-vyrazov",
      "title": "Finálne cvičenie",
      "custom": true,
      "maxScore": 0,
      "blocks": [
        {
          "type": "formula",
          "tex": "\\begin{aligned}\n\\text{1.}\\;&2x^2+3x-5-3x^2-x+2\\\\[4pt]\n\\text{2.}\\;&7n+3m+2+3n^2+4\\\\[4pt]\n\\text{3.}\\;&2a-\\left[b-(5a+2b-c)+(2a+b-3c)\\right]\\\\[4pt]\n\\text{4.}\\;&-R^2S+15RS^2-\\left(-5R^2S^2-R^2S-8RS+18RS^2\\right)\\\\[4pt]\n\\text{5.}\\;&(-2ax)(-3ax)(-xY^2)\\\\[4pt]\n\\text{6.}\\;&4xY(2x+3Y)\\\\[4pt]\n\\text{7.}\\;&(2xY+Y^2)(x^2-2xY)\\\\[4pt]\n\\text{8.}\\;&(x^2+x+1)(x^2+x+2)\\\\[4pt]\n\\text{9.}\\;&(2x-3)(x+4)(x^2-x+2)\\\\[4pt]\n\\text{10.}\\;&\\frac{-2xYz^2}{10x^2z}\\\\[4pt]\n\\text{11.}\\;&\\frac{-8x^6y^4z^7}{(2x^3)(4ub^4z^7)}\\\\[4pt]\n\\text{12.}\\;&\\frac{(-2x^2Yz)^2}{\\left(\\frac{x^2}{y^2}\\right)^2}\\\\[4pt]\n\\text{13.}\\;&\\frac{\\sqrt{x}\\sqrt[4]{y}}{\\sqrt{x^3}\\sqrt[5]{y}}\\\\[4pt]\n\\text{14.}\\;&\\frac{\\sqrt{a^9\\sqrt{b^{-3}}}}{\\sqrt[5]{b^3\\sqrt{a^3}}}\\\\[4pt]\n\\text{15.}\\;&\\frac{2(x-1)}3-\\frac{x+5}2=\\frac{x-7}6\\\\[4pt]\n\\text{16.}\\;&3(2x-1)-4=2(x+5)\\\\[4pt]\n\\text{17.}\\;&3(x-2)+5=2x+7\\\\[4pt]\n\\text{18.}\\;&3(x-2)+5=3x-1\\\\[4pt]\n\\text{19.}\\;&3(x-2)+5=3x+4\\\\[4pt]\n\\text{20.}\\;&4(x-2)+\\frac{x+1}{x-3}=9\\\\[4pt]\n\\text{21.}\\;&\n\\begin{gathered}\n5x-7=0,\\qquad x^2+4x+1=0,\\\\\n\\frac1{x-2}=3,\\qquad \\sqrt{x}=x-2\n\\end{gathered}\\\\[4pt]\n\\text{22.}\\;&3x^2-5x+2\\\\[4pt]\n\\text{23.}\\;&8x^2-3x+4-5x^2+7x-9\\\\[4pt]\n\\text{24.}\\;&4a-\\left[2a-(3a-b)+2b\\right]\\\\[4pt]\n\\text{25.}\\;&12x^3y-8x^2y^2\\\\[4pt]\n\\text{26.}\\;&(x-2)(x+1)(x+3)\\\\[4pt]\n\\text{27.}\\;&(2x+1)(x-2)(x^2+3)\\\\[4pt]\n\\text{28.}\\;&(a-b)(a+b)(a^2+b^2)\\\\[4pt]\n\\text{29.}\\;&(x+1)(x+2)(x+3)=(x^2+3x+2)x+3\\\\[4pt]\n\\text{30.}\\;&(-3a^2b)(4ab^3)\\\\[4pt]\n\\text{31.}\\;&5x(2x^2-3x+4)\\\\[4pt]\n\\text{32.}\\;&(x-4)(2x+3)\\\\[4pt]\n\\text{33.}\\;&(3x-2)^2\\\\[4pt]\n\\text{34.}\\;&\\frac{18x^5y^3}{6x^2y}\\\\[4pt]\n\\text{35.}\\;&\\frac{x^{3/2}}{x^{1/2}}\\\\[4pt]\n\\text{36.}\\;&a^{-3}b^2\\\\[4pt]\n\\text{37.}\\;&\\sqrt[3]{x^6}\\\\[4pt]\n\\text{38.}\\;&\\frac{\\sqrt{x+2}}{x^2-9}=1\\\\[4pt]\n\\text{39.}\\;&(x-4)(x+1)=0\\\\[4pt]\n\\text{40.}\\;&4(2x-1)-3x=5x-4\\\\[4pt]\n\\text{41.}\\;&3(x-2)+7=3x+1\\\\[4pt]\n\\text{42.}\\;&\\frac{x^2-4}{x-2}=0\\\\[4pt]\n\\text{43.}\\;&\\sqrt{x+6}=x\\\\[4pt]\n\\text{44.}\\;&(a-1)x=2,\\qquad a\\in\\mathbb R\\\\[4pt]\n\\text{45.}\\;&5-2x^3+x=4x^2-7\\\\[4pt]\n\\text{46.}\\;&5x-7=18\\\\[4pt]\n\\text{47.}\\;&4(2x-3)=3x+13\\\\[4pt]\n\\text{48.}\\;&2x+3=2x+3,\\qquad 2x+3=2x+5\\\\[4pt]\n\\text{49.}\\;&\\frac{2x}{x-1}=4\\\\[4pt]\n\\text{50.}\\;&|x+2|=7\\\\[4pt]\n\\text{51.}\\;&\\sqrt{2x+3}=x\\\\[4pt]\n\\text{52.}\\;&x^4-13x^2+36=0\\\\[4pt]\n\\text{53.}\\;&x^2+x-6=0\\\\[4pt]\n\\text{54.}\\;&(2x-1)^2=25\\\\[4pt]\n\\text{55.}\\;&x^2+4x-5\\\\[4pt]\n\\text{56.}\\;&f(x)=2(x+1)^2-8\\\\[4pt]\n\\text{57.}\\;&5x-10\\le0\\\\[4pt]\n\\text{58.}\\;&-2x+7>3\\\\[4pt]\n\\text{59.}\\;&(x-5)(x+2)>0\\\\[4pt]\n\\text{60.}\\;&x^2+2x-3>0\\\\[4pt]\n\\text{61.}\\;&-x^2+4x-3\\ge0\\\\[4pt]\n\\text{62.}\\;&\\frac{x-2}{x+1}<0\n\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}\n\\text{1.}\\;&-x^2+2x-3\\\\[4pt]\n\\text{2.}\\;&3n^2+7n+3m+6\\\\[4pt]\n\\text{3.}\\;&5a+2c\\\\[4pt]\n\\text{4.}\\;&5R^2S^2-3RS^2+8RS=RS(5RS-3S+8)\\\\[4pt]\n\\text{5.}\\;&-6a^2x^3Y^2\\\\[4pt]\n\\text{6.}\\;&8x^2Y+12xY^2\\\\[4pt]\n\\text{7.}\\;&2x^3Y-3x^2Y^2-2xY^3\\\\[4pt]\n\\text{8.}\\;&x^4+2x^3+4x^2+3x+2\\\\[4pt]\n\\text{9.}\\;&2x^4+3x^3-13x^2+22x-24\\\\[4pt]\n\\text{10.}\\;&-\\frac{Yz}{5x},\\qquad x\\ne0,\\quad z\\ne0\\\\[4pt]\n\\text{11.}\\;&-\\frac{x^3y^4}{ub^4},\\qquad x\\ne0,\\quad u\\ne0,\\quad b\\ne0,\\quad z\\ne0\\\\[4pt]\n\\text{12.}\\;&4y^4Y^2z^2,\\qquad x\\ne0,\\quad y\\ne0\\\\[4pt]\n\\text{13.}\\;&\\frac{\\sqrt[20]{y}}{x},\\qquad x>0,\\quad y>0\\\\[4pt]\n\\text{14.}\\;&\\frac{a^{21/5}}{b^{27/20}},\\qquad a>0,\\quad b>0\\\\[4pt]\n\\text{15.}\\;&U=\\mathbb R,\\qquad S=\\varnothing\\\\[4pt]\n\\text{16.}\\;&U=\\mathbb R,\\qquad S=\\left\\{\\frac{17}{4}\\right\\}\\\\[4pt]\n\\text{17.}\\;&U=\\mathbb R,\\qquad S=\\{8\\}\\\\[4pt]\n\\text{18.}\\;&U=\\mathbb R,\\qquad S=\\mathbb R\\\\[4pt]\n\\text{19.}\\;&U=\\mathbb R,\\qquad S=\\varnothing\\\\[4pt]\n\\text{20.}\\;&\n\\begin{gathered}\nL=4(x-2)+\\frac{x+1}{x-3},\\qquad R=9,\\\\\n\\text{členy ľavej strany: }4(x-2),\\ \\frac{x+1}{x-3},\\\\\n\\text{čitateľ: }x+1,\\qquad \\text{menovateľ: }x-3,\\qquad P:x\\ne3\n\\end{gathered}\\\\[4pt]\n\\text{21.}\\;&\n\\begin{gathered}\n5x-7=0:\\ \\text{lineárna},\\\\\nx^2+4x+1=0:\\ \\text{kvadratická},\\\\\n\\frac1{x-2}=3:\\ \\text{racionálna},\\quad x\\ne2,\\\\\n\\sqrt{x}=x-2:\\ \\text{iracionálna},\\quad x\\ge0\n\\end{gathered}\\\\[4pt]\n\\text{22.}\\;&3x^2-5x+2:\\ \\text{výraz}\\\\[4pt]\n\\text{23.}\\;&3x^2+4x-5\\\\[4pt]\n\\text{24.}\\;&5a-3b\\\\[4pt]\n\\text{25.}\\;&4x^2y(3x-2y)\\\\[4pt]\n\\text{26.}\\;&x^3+2x^2-5x-6\\\\[4pt]\n\\text{27.}\\;&2x^4-3x^3+4x^2-9x-6\\\\[4pt]\n\\text{28.}\\;&a^4-b^4\\\\[4pt]\n\\text{29.}\\;&\n\\begin{gathered}\n(x^2+3x+2)x+3\\ne(x^2+3x+2)(x+3),\\\\\n(x+1)(x+2)(x+3)=x^3+6x^2+11x+6\n\\end{gathered}\\\\[4pt]\n\\text{30.}\\;&-12a^3b^4\\\\[4pt]\n\\text{31.}\\;&10x^3-15x^2+20x\\\\[4pt]\n\\text{32.}\\;&2x^2-5x-12\\\\[4pt]\n\\text{33.}\\;&9x^2-12x+4\\\\[4pt]\n\\text{34.}\\;&3x^3y^2,\\qquad x\\ne0,\\quad y\\ne0\\\\[4pt]\n\\text{35.}\\;&x,\\qquad x>0\\\\[4pt]\n\\text{36.}\\;&\\frac{b^2}{a^3},\\qquad a\\ne0\\\\[4pt]\n\\text{37.}\\;&x^2,\\qquad x\\in\\mathbb R\\\\[4pt]\n\\text{38.}\\;&\n\\begin{gathered}\nP:x\\ge-2,\\quad x\\ne-3,\\quad x\\ne3,\\\\\nD=[-2,3)\\cup(3,\\infty)\n\\end{gathered}\\\\[4pt]\n\\text{39.}\\;&\n\\begin{gathered}\n(x-4)(x+1)=0\\Longleftrightarrow x=4\\lor x=-1,\\\\\nS=\\{-1,4\\},\\qquad x-4=0\\text{ pre }x=4\n\\end{gathered}\\\\[4pt]\n\\text{40.}\\;&U=\\mathbb R,\\qquad S=\\mathbb R\\\\[4pt]\n\\text{41.}\\;&U=\\mathbb R,\\qquad S=\\mathbb R\\\\[4pt]\n\\text{42.}\\;&P:x\\ne2,\\qquad S=\\{-2\\}\\\\[4pt]\n\\text{43.}\\;&\n\\begin{gathered}\nD=[-6,\\infty),\\qquad P:x\\ge0,\\\\\nx\\in\\{-2,3\\},\\qquad x_{\\mathrm{nepravý}}=-2,\\qquad S=\\{3\\}\n\\end{gathered}\\\\[4pt]\n\\text{44.}\\;&\n\\begin{cases}\na\\ne1:&S=\\left\\{\\dfrac{2}{a-1}\\right\\},\\\\\na=1:&S=\\varnothing\n\\end{cases}\\\\[4pt]\n\\text{45.}\\;&2x^3+4x^2-x-12=0\\\\[4pt]\n\\text{46.}\\;&U=\\mathbb R,\\qquad S=\\{5\\}\\\\[4pt]\n\\text{47.}\\;&U=\\mathbb R,\\qquad S=\\{5\\}\\\\[4pt]\n\\text{48.}\\;&\n\\begin{gathered}\n2x+3=2x+3:\\ S=\\mathbb R,\\\\\n2x+3=2x+5:\\ S=\\varnothing\n\\end{gathered}\\\\[4pt]\n\\text{49.}\\;&P:x\\ne1,\\qquad S=\\{2\\}\\\\[4pt]\n\\text{50.}\\;&S=\\{-9,5\\}\\\\[4pt]\n\\text{51.}\\;&\n\\begin{gathered}\nD=\\left[-\\frac32,\\infty\\right),\\qquad P:x\\ge0,\\\\\nx\\in\\{-1,3\\},\\qquad x_{\\mathrm{nepravý}}=-1,\\qquad S=\\{3\\}\n\\end{gathered}\\\\[4pt]\n\\text{52.}\\;&\n\\begin{gathered}\nt=x^2,\\qquad t\\ge0,\\qquad (t-4)(t-9)=0,\\\\\nS=\\{-3,-2,2,3\\}\n\\end{gathered}\\\\[4pt]\n\\text{53.}\\;&(x+3)(x-2)=0,\\qquad S=\\{-3,2\\}\\\\[4pt]\n\\text{54.}\\;&2x-1=\\pm5,\\qquad S=\\{-2,3\\}\\\\[4pt]\n\\text{55.}\\;&x^2+4x-5=(x+2)^2-9\\\\[4pt]\n\\text{56.}\\;&V=(-1,-8),\\qquad D(f)=\\mathbb R,\\qquad H(f)=[-8,\\infty)\\\\[4pt]\n\\text{57.}\\;&S=(-\\infty,2]\\\\[4pt]\n\\text{58.}\\;&S=(-\\infty,2)\\\\[4pt]\n\\text{59.}\\;&S=(-\\infty,-2)\\cup(5,\\infty)\\\\[4pt]\n\\text{60.}\\;&S=(-\\infty,-3)\\cup(1,\\infty)\\\\[4pt]\n\\text{61.}\\;&S=[1,3]\\\\[4pt]\n\\text{62.}\\;&P:x\\ne-1,\\qquad S=(-1,2)\n\\end{aligned}",
          "display": "block",
          "tts": false
        }
      ],
      "eyebrow": "Lekcia 11 z 11",
      "revision": "objavna-verzia-4"
    },
    {
      "id": "derivacie-01-funkcia-a-zmena-2",
      "courseId": "kurz-derivacie-doucko-2",
      "title": "1. Funkcia a derivácia ako opis zmeny",
      "custom": true,
      "maxScore": 7,
      "blocks": [
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Derivácia: Odkiaľ sa táto myšlienka vzala"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Predstav si Anglicko v roku 1665. Ulice Cambridge stíchli, univerzita sa pre mor zatvorila a mladý Isaac Newton sa vrátil na rodinný statok vo Woolsthorpe. Na stole má náčrty kriviek, na dvore sleduje tiene a v hlave mu zostáva jedna zdanlivo jednoduchá otázka. Predstav si kameň padajúci z vysokej veže. Počas prvej sekundy prejde určitú vzdialenosť, počas nasledujúcej ešte väčšiu, pretože neustále zrýchľuje. Ako rýchlo sa však pohybuje presne v jednom okamihu? Vydeliť celkovú vzdialenosť časom nestačí, pretože dostaneme iba priemer za celé obdobie. Ak však skúmaný čas skrátime až na jediný okamih, nemáme čím deliť. Znamená to, že okamžitá rýchlosť v skutočnosti neexistuje, alebo nám iba chýba spôsob, ako ju vypočítať? Newton preto začne skúmať, k akej hodnote sa priemerné rýchlosti približujú, keď meraný čas skracuje. Tak sa rodí jeho predstava plynúcich veličín a ich okamžitých zmien, ktoré nazýva fluxie."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "O niekoľko rokov neskôr pracuje nezávisle Gottfried Wilhelm Leibniz. Kým Newton premýšľa najmä o pohybe, Leibniz vytvára presný jazyk zmien so symbolmi dx, dy a znakom integrálu. Newton prišiel k svojim základným myšlienkam skôr, no dlho ich nezverejnil. Leibniz svoj postup publikoval v roku 1684, a tak sa jeho zrozumiteľný zápis začal rýchlo šíriť medzi európskymi matematikmi. Dvaja myslitelia zatiaľ netušia, že ich spoločný objav čoskoro rozpúta jednu z najostrejších vojen v dejinách matematiky."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Iskra preskočí v roku 1699, keď Newtonovi stúpenci naznačia, že Leibniz svoje myšlienky neobjavil sám, ale prevzal ich z Newtonových starších listov. Leibniz sa bráni: Newtonove úplné postupy nikdy nevidel a k diferenciálnemu počtu dospel vlastnou cestou. Spor sa mení na súboj národnej cti. Angličania stoja za Newtonom, učenci na európskom kontinente za Leibnizom. Listy sa plnia obvineniami, vedecké časopisy útokmi a otázka, ako opisovať pohyb a zmenu, ustupuje oveľa osobnejšej otázke: Kto ukradol slávu komu?"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Leibniz napokon požiada Kráľovskú spoločnosť, aby spor nestranne vyšetrila. Netuší však, že jej predsedom je samotný Newton. Správa vydaná v roku 1712 prisúdi prvenstvo Newtonovi, pričom Newton vyberie členov vyšetrovacieho výboru a výrazne ovplyvní aj jeho závery. Leibniz zomiera v roku 1716 so zatienenou povesťou, no dejiny napokon vynesú spravodlivejší rozsudok: obaja vytvorili základy matematickej analýzy nezávisle. Newton ukázal, ako chápať meniaci sa svet, Leibniz mu dal jazyk, ktorým o ňom dodnes hovoríme."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Najprv musíme vedieť, čo je funkcia"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Na vodorovnej osi máme premennú. Zvyčajne ju voláme "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", ale vo fyzike to môže byť napríklad čas "
            },
            {
              "type": "formula",
              "tex": "t",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Dosádzame do nej hodnoty. Zvislá os je funkčná os: ukazuje výsledok, ktorý pre daný vstup vypočíta funkcia."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Napríklad predpis "
            },
            {
              "type": "formula",
              "tex": "f(x)=x+1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " znamená: vezmite vstup, pripočítajte jednotku a výsledok položte na zvislú os. Pre "
            },
            {
              "type": "formula",
              "tex": "x=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " dostaneme "
            },
            {
              "type": "formula",
              "tex": "f(0)=1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", pre "
            },
            {
              "type": "formula",
              "tex": "x=1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " dostaneme "
            },
            {
              "type": "formula",
              "tex": "f(1)=2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Tak vzniká priamka."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Funkcia však nemusí byť priamka. Môže to byť parabola, kubická funkcia, hyperbola, logaritmus, exponenciála alebo kombinácia viacerých funkcií. Každá z nich môže opisovať nejaký dej: teplotu počas dňa, dráhu auta, výmenu tepla alebo rast počtu baktérií."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Čo na grafe hľadáme"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Predstavte si dennú teplotu. V noci klesá, ráno dosiahne najnižšiu hodnotu, cez deň stúpa, popoludní dosiahne najvyššiu hodnotu a potom zase klesá. Na grafe teda nehľadáme iba konkrétne číslo. Hľadáme úseky, kde funkcia stúpa alebo klesá, a miesta, kde sa jej správanie mení."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Keď schádzate dolu kopcom a dostanete sa na úplné dno, na okamih už nejdete nižšie, ale ešte ste nezačali stúpať. Také miesto voláme "
            },
            {
              "type": "text",
              "text": "stacionárny bod",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": ". Ak je to dno doliny, ide o lokálne minimum. Ak ide o vrchol, po ktorom funkcia začne klesať, ide o lokálne maximum. Nie každý stacionárny bod však musí byť maximom alebo minimom."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "V stacionárnom bode, v ktorom derivácia existuje, je jej hodnota nulová. To neznamená, že hodnota funkcie je nula; znamená to, že graf má vodorovnú dotyčnicu. Samotná nulová derivácia ešte nerozhoduje, či ide o maximum, minimum alebo napríklad stacionárny inflexný bod."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Miesto, kde sa funkcia preruší"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pozrime sa na funkciu "
            },
            {
              "type": "formula",
              "tex": "r(x)=\\frac{x+2}{x-6}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Skúste dosadiť "
            },
            {
              "type": "formula",
              "tex": "x=6",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". V čitateli dostaneme 8, ale v menovateli 0. Delenie nulou je zakázaná matematická operácia, takže v tomto bode nevieme funkcii priradiť hodnotu."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pre túto funkciu graf tesne pred šestkou klesá k veľmi veľkým záporným hodnotám a tesne za šestkou prichádza z veľmi veľkých kladných hodnôt. V samotnom bode "
            },
            {
              "type": "formula",
              "tex": "x=6",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " však hodnota chýba. Funkciu tam musíme prerušiť. Je to bod nespojitosti."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Prečo to spomíname pred derivovaním? Pretože derivácia je nástroj, ktorým sa pozeráme dovnútra funkcie. Pomáha nám opísať jej rast, pokles, stacionárne body a ďalšie vlastnosti. Najprv teda musíme vidieť funkciu ako dej, nie iba ako rad symbolov."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Grafický experiment: denná teplota a jej zmena"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Modrý graf predstavuje zjednodušenú teplotu počas dňa. Červený graf je jej derivácia. Posúvajte čas a sledujte naraz výšku modrého bodu aj hodnotu červeného bodu. Pýtajte sa: rastie teplota, klesá, alebo sa práve na okamih zastavila?"
            }
          ]
        },
        {
          "type": "geogebra",
          "title": "Teplota počas dňa a jej derivácia",
          "app": "graphing",
          "bounds": [
            0,
            24,
            -6,
            30
          ],
          "commands": [
            "t=8",
            "f(x)=18+6*sin(pi*(x-8)/12)",
            "g(x)=Derivative(f)",
            "A=(t,f(t))",
            "B=(t,g(t))"
          ],
          "controls": [
            [
              "t",
              0,
              24,
              0.25,
              8
            ]
          ],
          "tasks": [
            {
              "text": "Dokážete nájsť čas, keď je teplota na lokálnom minime? Sledujte, či sa modrý graf prestáva znižovať a či je červená hodnota zmeny takmer nulová.",
              "condition": "t>1.8 && t<2.2 && abs(g(t))<0.05"
            },
            {
              "text": "Kedy sa teplota počas tohto modelového dňa dostane na lokálne maximum? Overte vrchol modrého grafu aj takmer nulovú hodnotu derivácie.",
              "condition": "t>13.8 && t<14.2 && abs(g(t))<0.05"
            },
            {
              "text": "Nájdite čas, keď teplota rastie najrýchlejšie. Sledujte, že modrý graf ešte nie je na maxime, ale červený graf má vysokú kladnú hodnotu.",
              "condition": "t>7.8 && t<8.2 && g(t)>1.5"
            }
          ],
          "expected": [
            "t",
            "f",
            "g",
            "A",
            "B"
          ],
          "colors": {
            "f": [
              29,
              78,
              216
            ],
            "g": [
              220,
              38,
              38
            ],
            "A": [
              22,
              163,
              74
            ],
            "B": [
              147,
              51,
              234
            ]
          },
          "fill": {},
          "open": [],
          "preserveStyle": true,
          "toolbar": false,
          "maxScore": 3,
          "tts": false,
          "interactionModel": "bodovana-graficka-uloha"
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Stručná sumarizácia"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Funkcia priraďuje vstupu výsledok a jej graf môže opisovať reálny dej. Derivácia hovorí, ako sa funkcia mení. Na intervale, kde je derivácia kladná, funkcia rastie; kde je záporná, funkcia klesá. Nulová derivácia označuje stacionárny bod, ale sama osebe ešte neurčuje jeho typ. Pred počítaním je preto užitočné premyslieť si, čo sa na grafe deje."
            }
          ]
        },
        {
          "type": "test",
          "title": "Funkcia, zmena a stacionárny bod",
          "source": "# Funkcia, zmena a stacionárny bod\n\n[ABCD]\nČo opisuje derivácia funkcie?\n- Iba hodnotu funkcie v bode x=0.\n* Spôsob, akým sa funkcia mení.\n- Miesto, kde graf pretína os y.\n- Iba definičný obor funkcie.\n\n[DROPDOWN]\nBod, v ktorom funkcia prestane klesať a začne stúpať, môže byť lokálne {{výber}}.\n- maximum\n* minimum\n- asymptota\n- nespojitosť\n\n[ABCD]\nPrečo funkcia (x+2)/(x-6) nemá hodnotu pri x=6?\n- Pretože čitateľ je kladný.\n- Pretože výsledok musí byť záporný.\n* Pretože by sme delili nulou.\n- Pretože x nesmie byť celé číslo.\n\n[ODPOVEĎ]\nAk je graf v hladkom stacionárnom bode vodorovný, akú hodnotu tam má derivácia?\n= 0 | nula",
          "maxScore": 4,
          "tts": false
        }
      ],
      "eyebrow": "Lekcia 1 z 8"
    },
    {
      "id": "derivacie-02-zmena-na-prikladoch-2",
      "courseId": "kurz-derivacie-doucko-2",
      "title": "2. Derivácia ako zmena: konštanta, priamka a logaritmus",
      "custom": true,
      "maxScore": 7,
      "blocks": [
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Najjednoduchšia funkcia: stále číslo 3"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Môže byť samotné číslo 3 funkciou? Áno. Je to konštantná funkcia, ktorá pre každý vstup vráti tú istú hodnotu. Zapisujeme ju ako "
            },
            {
              "type": "formula",
              "tex": "f(x)=3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Pre ľubovoľné dva vstupy "
            },
            {
              "type": "formula",
              "tex": "x_1,x_2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " platí, že f(x_1)=f(x_2)=3, takže výstup sa nemení."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Dosadíme "
            },
            {
              "type": "formula",
              "tex": "x=1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a výsledok je 3. Dosadíme "
            },
            {
              "type": "formula",
              "tex": "x=2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a výsledok je znovu 3. Na vstupe sme spravili krok o jednotku, ale výstup sa zmenil o nulu. Graf je vodorovná priamka."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Aký je rozdiel medzi dvomi bodmi v tejto funkcii? Napríklad porovnaj body x1 (4) a x2 (5) aký bude ich rozdiel vo funkcii f(x)=3?"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "(3)'=0",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Konštantná funkcia sa nemení, preto je jej derivácia v každom bode je nula. \nNula tu je to presná informácia o grafe: nech sa na osi "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " pohneme akokoľvek, výška zostáva rovnaká."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Lineárna funkcia: vstup o jeden, výstup o jeden"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Teraz vezmime "
            },
            {
              "type": "formula",
              "tex": "f(x)=x+1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Pre "
            },
            {
              "type": "formula",
              "tex": "x=0",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " dostaneme 1, pre "
            },
            {
              "type": "formula",
              "tex": "x=1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " dostaneme 2 a pre "
            },
            {
              "type": "formula",
              "tex": "x=2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " dostaneme 3. "
            },
            {
              "type": "text",
              "text": "Vždy, keď vstup zväčšíme o jednotku, výstup sa zväčší tiež o jednotku.",
              "marks": [
                "bold"
              ]
            }
          ]
        },
        {
          "type": "formula",
          "tex": "(x+1)'=1+0=1",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Člen "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " má jednotkovú zmenu, preto "
            },
            {
              "type": "formula",
              "tex": "(x)'=1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Samostatná konštanta 1 sa nemení, preto sa zderivuje na nulu. Výsledkom je konštanta 1: priamka má na každom mieste rovnaký sklon."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pozor: derivácia nemusí byť iba číslo"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri prvých dvoch príkladoch vyšla derivácia 0 alebo 1. To môže vytvoriť nesprávny dojem, že derivácia je vždy jedno číslo. Nie je. Keď sa sklon pôvodného grafu mení z miesta na miesto, výsledkom derivovania je nová funkcia. Čiže "
            },
            {
              "type": "text",
              "text": "derivácia neplatí iba na vybraný  bod v grafe ale platí na úplne celú funkciu.",
              "marks": [
                "bold"
              ]
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Logaritmus: stále rastie, ale čoraz menej"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pozrime sa na "
            },
            {
              "type": "formula",
              "tex": "f(x)=\\ln x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Do tejto funkcie môžeme dosádzať iba kladné hodnoty. Blízko nuly rastie graf veľmi prudko. Medzi väčšími hodnotami stále rastie, ale každý ďalší rovnaký krok vytvorí menší prírastok."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Porovnajte jednotkové kroky. Z "
            },
            {
              "type": "formula",
              "tex": "x=1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " do "
            },
            {
              "type": "formula",
              "tex": "x=2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " graf narastie citeľne. Z 2 do 3 narastie menej. Z 4 do 5 ešte menej. "
            },
            {
              "type": "text",
              "text": "Derivácia musí túto povahu zachytiť pre každý bod",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": ": pri malých kladných "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " má byť veľká a pri veľkých "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " sa má približovať k nule."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "(\\ln x)'=\\frac{1}{x}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Funkcia "
            },
            {
              "type": "formula",
              "tex": "\\frac{1}{x}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " určuje sklon dotyčnice ku grafu logaritmu. Pri "
            },
            {
              "type": "formula",
              "tex": "x=1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " má derivácia hodnotu 1, pri "
            },
            {
              "type": "formula",
              "tex": "x=2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je "
            },
            {
              "type": "formula",
              "tex": "\\frac12",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a pri "
            },
            {
              "type": "formula",
              "tex": "x=10",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " iba "
            },
            {
              "type": "formula",
              "tex": "\\frac1{10}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Logaritmus teda stále rastie, ale jeho sklon sa s rastúcim vstupom zmenšuje."
            }
          ]
        },
        {
          "type": "geogebra",
          "title": "Logaritmus rastie, ale jeho zmena klesá",
          "app": "graphing",
          "bounds": [
            0,
            10,
            -3,
            11
          ],
          "commands": [
            "a=1",
            "f(x)=ln(x)",
            "g(x) = Derivative(f)",
            "A=(a,f(a))",
            "B=(a,g(a))",
            "T=Tangent(A,f)",
            "Text(\"Derivácia\", (0.3,5))"
          ],
          "controls": [
            [
              "a",
              0.1,
              9,
              0.1,
              1
            ]
          ],
          "tasks": [
            {
              "text": "Nájdite miesto, kde má logaritmus okamžitú zmenu približne 1. Sledujte súčasne sklon dotyčnice aj výšku červeného bodu.",
              "condition": "a>0.95 && a<1.05"
            },
            {
              "text": "Dokážete nájsť miesto, kde logaritmus stále rastie, ale jeho okamžitá zmena je už menšia než 0,2? Sledujte sploštenie modrého grafu a kladnú polohu červeného bodu.",
              "condition": "a>5"
            },
            {
              "text": "Priblížte sa ku kladnej nule bez toho, aby ste ju dosiahli. Čo sa deje so strmosťou logaritmu a s hodnotou jeho derivácie? Nájdite stav s veľmi prudkým rastom.",
              "condition": "a<0.25"
            }
          ],
          "expected": [],
          "colors": {},
          "fill": {},
          "open": [],
          "preserveStyle": true,
          "toolbar": false,
          "maxScore": 3,
          "tts": false,
          "interactionModel": "bodovana-graficka-uloha"
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Stručná sumarizácia"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri derivácii porovnávame zmenu vstupu so zmenou výstupu. Konštanta má deriváciu 0, priamka "
            },
            {
              "type": "formula",
              "tex": "x+1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " má deriváciu 1 a logaritmus má deriváciu "
            },
            {
              "type": "formula",
              "tex": "\\frac1x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Najdôležitejšia myšlienka: derivácia môže byť nová funkcia, ktorá na každom mieste rozpráva, ako sa pôvodná funkcia práve mení."
            }
          ]
        },
        {
          "type": "test",
          "title": "Derivácia ako zmena",
          "source": "# Derivácia ako zmena\n\n[ABCD]\nPrečo je derivácia konštantnej funkcie f(x)=3 rovná nule?\n- Pretože číslo 3 je nepovolené.\n- Pretože x musí byť záporné.\n* Pretože pri zmene vstupu sa výstup vôbec nezmení.\n- Pretože 3 delené x je nula.\n\n[DROPDOWN]\nPri funkcii f(x)=x+2 sa pri zvýšení vstupu o 1 zvýši výstup o {{výber}}.\n- 0\n* 1\n- 2\n- x\n\n[ABCD]\nKtoré tvrdenie o funkcii ln(x) je správne?\n- Klesá a jej derivácia je záporná.\n- Je definovaná aj pre x=0.\n* Rastie, ale pre väčšie x rastie čoraz pomalšie.\n- Má v každom bode rovnaký sklon.\n\n[ODPOVEĎ]\nAká je derivácia funkcie ln(x) pri x=2?\n= 1/2 | 0,5 | 0.5",
          "maxScore": 4,
          "tts": false
        }
      ],
      "eyebrow": "Lekcia 2 z 8"
    },
    {
      "id": "derivacie-03-mocniny-a-konstanty-2",
      "courseId": "kurz-derivacie-doucko-2",
      "title": "3. Mocniny a polynómy: exponent a konštanty",
      "custom": true,
      "maxScore": 8,
      "blocks": [
        {
          "type": "paragraph",
          "role": "hook",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Teraz už vieme, čo derivácia znamená. Pri výpočte najprv určíme typ člena, vyberieme správne pravidlo a rozlíšime samostatnú konštantu od konštantného koeficientu pri premennej."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Graf znázorňuje funkciu "
            },
            {
              "type": "formula",
              "tex": "f(x) = ax^b + cx^2 + k",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a zobrazuje deriváciu tejto funkcie."
            }
          ]
        },
        {
          "type": "geogebra",
          "title": "Derivácia polynómu",
          "app": "graphing",
          "bounds": [
            -5,
            5,
            -5,
            5
          ],
          "commands": [
            "a = 0",
            "b = 0",
            "c = 0",
            "k = 0",
            "i = 0",
            "j = 0",
            "f(x) = ax^b + cx^2 + k",
            "Text(ax^b + cx^2 + k,(1, f(1)))",
            "g(x) = Derivative(f)",
            "Text(\"f(x)'\",(-0.5, g(-0.5)))",
            "h(x) = ix^j",
            "Text(ix^j,(0.5, h(0.5)))"
          ],
          "controls": [
            [
              "a",
              -3,
              6,
              0.5,
              2
            ],
            [
              "b",
              -3,
              6,
              1,
              6
            ],
            [
              "c",
              -5,
              5,
              0.5,
              0
            ],
            [
              "i",
              -6,
              10,
              1,
              0
            ],
            [
              "j",
              -6,
              10,
              1,
              0
            ],
            [
              "k",
              -5,
              5,
              0.1,
              0
            ]
          ],
          "tasks": [
            {
              "text": "Nastav parametre a,b,c,k vo funkcii f(x) = ax^b + cx^2 + k tak aby si získal f(x) = 2x^3",
              "condition": "a==2&&b==3&&c==0&&k==0"
            },
            {
              "text": "Nastav parametre pomocnej funkcie h(x) = ix^j tak aby sa rovnal derivácii funkcie f(x) = 2x^3",
              "condition": "i==6&&j==2"
            },
            {
              "text": "Nastav funkciu f(x) = ax^b + cx^2 + k tak aby sa rovnala funkcii f(x)=1/x.",
              "condition": "a==1&&b==0.5&&c==0&&k==0"
            },
            {
              "text": "Nastav parametre pomocnej funkcie h(x) = ix^j tak aby sa rovnal derivácii funkcie f(x) = 2x^-3",
              "condition": "i==-6&&j==-4"
            }
          ],
          "expected": [],
          "colors": {},
          "fill": {},
          "open": [],
          "preserveStyle": false,
          "toolbar": false,
          "maxScore": 0,
          "tts": false
        },
        {
          "type": "test",
          "title": "Test",
          "source": "# Test\n\n[DROPDOWN]\nDoplňte správnu možnosť: Výraz 1/x môžeme pre x ≠ 0 zapísať ako {{výber}}.\n* x^(-1)\n- -x\n- x\n- x^(1/2)\n\n[ABCD]\nKtorý výraz je ekvivalentný výrazu 2x^(-3), ak x ≠ 0?\n* 2/x^3\n- 2/x^(-3)\n- -2/x^3\n- 1/(2x^3)\n\n[ABCD]\nKtorá z nasledujúcich funkcií je polynóm?\n* f(x)=3x^4-2x^2+5x-7\n- f(x)=1/x+2\n- f(x)=3x^(-4)-2x^2+5x-7\n- f(x)=x^(1/2)+1\n\n[DROPDOWN]\nFunkcia f(x)=4x^5-5x^2+7 je polynóm {{výber}} stupňa.\n* piateho\n- štvrtého\n- druhého\n- siedmeho\n\n[DROPDOWN]\nMocninové pravidlo pre (x^n)'x má tvar={{výber}}.\n* n·x^(n-1)\n- x^(n-1)\n- n·x^n\n- (-n)·x^n\n\n\n[ODPOVEĎ]\nVypočítajte deriváciu funkcie f(x)=1/x a výsledok zapíšte ako zlomok.\n= -1/x^2 | -1/(x^2)\n\n[ABCD]\nAk f(x)=2x^3, ktorá funkcia sa rovná f'(x)?\n* 6x^2\n- 2x^3\n- 3x^2\n- 6x^3\n\n[ABCD]\nAk f(x)=2x^(-3), ktorá funkcia sa rovná derivácii f'(x)?\n* -6x^(-4)\n- 6x^(-2)\n- -3x^(-4)\n- 2x^(-4)\n\n[ABCD]\nAký vplyv má samostatná konštanta k vo funkcii (x)=ax^b+cx^2+k na jej deriváciu?\n* Nemá žiadny vplyv, pretože derivácia konštanty je 0.\n- V derivácii sa nahradí číslom 1.\n- V derivácii zostane bez zmeny.\n- Všetky členy derivácie sa vynásobia konštantou k.\n\n[ODPOVEĎ]\nVypočítajte deriváciu funkcie f(x)=3x^4+2x^2+7.\n= 12x^3+4x | 12*x^3+4*x",
          "maxScore": 10,
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Mocninové pravidlo: exponent zhodíme a znížime"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pre mocninovú funkciu používame v bodoch, kde je daný výraz definovaný, pravidlo"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "(x^a)'=a x^{a-1}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pracovný postup je jednoduchý: číslo z exponentu "
            },
            {
              "type": "text",
              "text": "zhodíme dopredu",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": ", základ "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " opíšeme a exponent znížime o jeden."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Napríklad pri "
            },
            {
              "type": "formula",
              "tex": "x^3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " zhodíme trojku dopredu, "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " opíšeme a z exponentu 3 spravíme "
            },
            {
              "type": "formula",
              "tex": "3-1=2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Kooeficient pred neznámou len opíšeme."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "(2x^3)'=2*3x^{3-1}=2*3x^2=6x^2",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Celý príklad po jednotlivých členoch"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zderivujme funkciu "
            },
            {
              "type": "formula",
              "tex": "f(x)=x^3+6x-3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Pri sčítaní a odčítaní môžeme derivovať každý člen osobitne a znamienka zachováme."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}f'(x)&=(x^3)'+(6x)'-(3)'\\\\&=3x^2+6\\cdot1-0\\\\&=3x^2+6\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Prvý člen sme riešili mocninovým pravidlom. Pri "
            },
            {
              "type": "formula",
              "tex": "6x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " číslo 6 nezmizlo, pretože nie je samostatné: násobí premennú. Šestku opíšeme a zderivujeme "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Keďže "
            },
            {
              "type": "formula",
              "tex": "(x)'=1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", zostane 6."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Až posledný člen "
            },
            {
              "type": "formula",
              "tex": "-3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je čistá samostatná konštanta bez premennej. Preto sa zderivuje na nulu. Toto je jeden z najčastejších chytákov: "
            },
            {
              "type": "text",
              "text": "samostatnú konštantu nulujeme, koeficient pri funkcii opisujeme",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Prečo je derivácia x rovná 1 aj podľa mocninového pravidla"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Výraz "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " môžeme zapísať ako "
            },
            {
              "type": "formula",
              "tex": "x^1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Jednotku zhodíme dopredu a exponent znížime:"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "(x^1)'=1\\cdot x^{1-1}=x^0=1",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Takže pravidlo "
            },
            {
              "type": "formula",
              "tex": "(x)'=1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je osobitný prípad mocninového pravidla, nie samostatné nesúvisiace pravidlo."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Konštanta pred funkciou sa opisuje"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zoberme "
            },
            {
              "type": "formula",
              "tex": "g(x)=20x^4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Číslo 20 je konštantný násobok pri "
            },
            {
              "type": "formula",
              "tex": "x^4",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Pri derivovaní ho preto opíšeme a derivujeme mocninovú časť."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "(20x^4)'=20\\cdot4x^3=80x^3",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Rovnaký princíp platí všeobecne: ak "
            },
            {
              "type": "formula",
              "tex": "c",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je konštanta, potom "
            },
            {
              "type": "formula",
              "tex": "(c\\,f(x))'=c\\,f'(x)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Nulovanie konštanty sa používa iba vtedy, keď konštanta stojí ako samostatný sčítanec."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Rýchly pracovný postup na polynóm"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1.",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Rozdeľte výraz podľa plusov a mínusov. "
            },
            {
              "type": "text",
              "text": "2.",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Pri každom člene si všimnite koeficient a exponent. "
            },
            {
              "type": "text",
              "text": "3.",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Koeficient opíšte. "
            },
            {
              "type": "text",
              "text": "4.",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Exponent zhoďte dopredu a znížte o jeden. "
            },
            {
              "type": "text",
              "text": "5.",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Samostatné číslo nahraďte nulou. "
            },
            {
              "type": "text",
              "text": "6.",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Výsledok upravte."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Vedený príklad"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zderivujme "
            },
            {
              "type": "formula",
              "tex": "h(x)=-4x^5+\\frac12x^2+7x-9",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Najprv nič nespájame. Každý člen vybavíme rovnakou logikou."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}h'(x)&=-4\\cdot5x^4+\\frac12\\cdot2x+7\\cdot1-0\\\\&=-20x^4+x+7\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Skontrolujte si tri chytáky: mínus pri prvom člene zostal, zlomok "
            },
            {
              "type": "formula",
              "tex": "\\frac12",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " sa iba násobil dvojkou a posledná deviatka zmizla, lebo bola samostatná."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Grafický experiment: koeficient, exponent a derivácia"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "V grafe je "
            },
            {
              "type": "formula",
              "tex": "f(x)=c x^n",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a červený graf je jej derivácia. Posuvník "
            },
            {
              "type": "formula",
              "tex": "n",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " zahŕňa aj nulu a jednotku, aby ste videli hraničné prípady: konštantu a lineárnu funkciu."
            }
          ]
        },
        {
          "type": "geogebra",
          "title": "Čo robí mocninové pravidlo s grafom",
          "app": "graphing",
          "bounds": [
            -4,
            4,
            -10,
            10
          ],
          "commands": [
            "c=1",
            "n=2",
            "a=1",
            "f(x)=c*x^n",
            "Text(c*x^n,(1,f(1)))",
            "g(x)=Derivative(f)",
            "Text(\"f'\",(-1,g(-1)))",
            "A=(a,f(a))",
            "B=(a,g(a))"
          ],
          "controls": [
            [
              "c",
              -3,
              3,
              0.5,
              1
            ],
            [
              "n",
              0,
              5,
              1,
              2
            ],
            [
              "a",
              -2,
              2,
              0.25,
              0
            ]
          ],
          "tasks": [
            {
              "text": "Vytvorte konštantnú funkciu, ktorá neleží na osi x. Sledujte, čo sa stane s celým červeným grafom derivácie a prečo sa výstup nemení.",
              "condition": "abs(n)<0.001 && abs(c)>0.4 && abs(g(a))<0.001"
            },
            {
              "text": "Vytvorte lineárnu funkciu so záporným sklonom.",
              "condition": "abs(n-1)<0.001 && c<0 && abs(g(a)-c)<0.001"
            }
          ],
          "expected": [
            "c",
            "n",
            "a",
            "f",
            "g",
            "A",
            "B"
          ],
          "colors": {
            "f": [
              29,
              78,
              216
            ],
            "g": [
              220,
              38,
              38
            ],
            "A": [
              22,
              163,
              74
            ],
            "B": [
              147,
              51,
              234
            ]
          },
          "fill": {},
          "open": [],
          "preserveStyle": true,
          "toolbar": false,
          "maxScore": 3,
          "tts": false,
          "interactionModel": "bodovana-graficka-uloha"
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Stručná sumarizácia"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri mocnine zhodíme exponent dopredu a znížime ho o jeden. Pri súčte derivujeme člen po člene. Číslo pri premennej opisujeme, ale samostatnú konštantu nulujeme. Ak si nie ste istí pri "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", prepíšte ho ako "
            },
            {
              "type": "formula",
              "tex": "x^1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a použite rovnaké pravidlo."
            }
          ]
        },
        {
          "type": "test",
          "title": "Mocninové pravidlo",
          "source": "# Mocninové pravidlo\n\n[ABCD]\nAká je derivácia x^5?\n- 5x^5\n* 5x^4\n- x^4\n- 4x^5\n\n[ABCD]\nAká je derivácia 6x?\n- 0\n- 1\n* 6\n- 6x\n\n[DROPDOWN]\nV príklade 3x²-7 sa samostatný člen -7 zderivuje na {{výber}}.\n* 0\n- -7\n- 1\n- 7x\n\n[ODPOVEĎ]\nZderivuj funkciu f(x)=4x³.\n= 12x^2 | 12x² | 12*x^2\n\n[ABCD]\nKtorý výsledok je správny pre f(x)=x³+6x-3?\n- 3x²+6x-3\n- 3x²+6x\n* 3x²+6\n- x²+6",
          "maxScore": 5,
          "tts": false
        }
      ],
      "eyebrow": "Lekcia 3 z 8"
    },
    {
      "id": "derivacie-04-exponencialy-a-trigonometria-2",
      "courseId": "kurz-derivacie-doucko-2",
      "title": "4. Exponenciálne a goniometrické funkcie",
      "custom": true,
      "maxScore": 8,
      "blocks": [
        {
          "type": "paragraph",
          "role": "hook",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Prehľad vzorcov pomáha iba vtedy, keď správne rozlíšime základ, exponent, argument funkcie a význam výslednej derivácie. Pri goniometrických deriváciách používame argumenty v radiánoch."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Exponenciálna funkcia"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Funkcia "
            },
            {
              "type": "formula",
              "tex": "a^x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " má konštantný základ "
            },
            {
              "type": "formula",
              "tex": "a",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a premennú v exponente. Preto si ju nemýľte s mocninou "
            },
            {
              "type": "formula",
              "tex": "x^a",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", kde je premenný základ a konštantný exponent. Pre reálnu exponenciálnu funkciu predpokladáme a>0; pri logaritme so základom a navyše a≠1."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "(a^x)'=a^x\\ln a",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Ak je pred funkciou konštanta, opíšeme ju. Napríklad"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "(8\\cdot7^x)'=8\\cdot7^x\\ln7",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Osobitné miesto má Eulerovo číslo "
            },
            {
              "type": "formula",
              "tex": "e\\approx2{,}718",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Pri prirodzenom logaritme platí "
            },
            {
              "type": "formula",
              "tex": "\\ln e=1",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", preto"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "(e^x)'=e^x",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Táto funkcia rastie tak, že jej okamžitá zmena má v každom bode rovnakú hodnotu ako samotná funkcia. Preto sa objavuje pri prírodnom raste, úročení, šírení a mnohých procesoch, ktoré sa zrýchľujú podľa vlastnej veľkosti."
            }
          ]
        },
        {
          "type": "geogebra",
          "title": "Vlastný graf",
          "app": "graphing",
          "bounds": [
            -3,
            5,
            -5,
            5
          ],
          "commands": [
            "a = 1",
            "k = 1",
            "f(x) = ka^x",
            "Text(ka^x,(1,f(1)))",
            "g(x) = Derivative(f)",
            "Text(\"Derivacia\",(0.5,g(0.5)))"
          ],
          "controls": [
            [
              "a",
              -1,
              7,
              0.1,
              1
            ],
            [
              "k",
              -5,
              8,
              0.1,
              1
            ]
          ],
          "tasks": [
            {
              "text": "Kedy sa funkcia f(x) = ka^x (ak a>0) približne rovná jej vlastnej derivácii?",
              "condition": "a>2.6 && a<2.8"
            }
          ],
          "expected": [],
          "colors": {},
          "fill": {},
          "open": [],
          "preserveStyle": true,
          "toolbar": false,
          "maxScore": 1,
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Sínus a kosínus: kopec a rýchlosť"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri argumentoch meraných v radiánoch platí"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "(\\sin x)'=\\cos x,\\qquad (\\cos x)'=-\\sin x",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Ale neostaňme iba pri zapamätaní. Predstavte si, že modrá sínusoida je profil kopca a vy po nej bicyklujete. Keď je kopec najstrmší smerom hore, vaša zmena výšky je najväčšia kladná. Keď ste na vrchole, na okamih už nestúpate a ešte neklesáte: zmena je nula."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Za vrcholom idete dolu. Derivácia je záporná. V najstrmšom klesaní má najväčšiu zápornú veľkosť. Kosínus teda presne rozpráva, čo sa deje so sínusom: kde rastie, kde stojí a kde klesá."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Prehľad základných derivačných vzorcov"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Nasledujúci blok je prehľad. Pri každom vzorci si všimnite pôvodnú funkciu, výslednú funkciu, znamienko a definičné podmienky."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned} (c)' &= 0 & (x)' &= 1 & (x^a)' &= ax^{a-1} \\\\[3pt] \\left(\\frac{1}{x}\\right)' &= -\\frac{1}{x^2} & (\\sqrt{x})' &= \\frac{1}{2\\sqrt{x}} & (\\sqrt[n]{x})' &= \\frac{1}{n\\sqrt[n]{x^{n-1}}} \\\\[3pt] (a^x)' &= a^x\\ln a & (e^x)' &= e^x & (\\log_a x)' &= \\frac{1}{x\\ln a} \\\\[3pt] (\\ln x)' &= \\frac{1}{x} & (\\sin x)' &= \\cos x & (\\cos x)' &= -\\sin x \\\\[3pt] (\\tan x)' &= \\frac{1}{\\cos^2 x} & (\\cot x)' &= -\\frac{1}{\\sin^2 x} & (\\sec x)' &= \\sec x\\tan x \\\\[3pt] (\\csc x)' &= -\\csc x\\cot x & (\\arcsin x)' &= \\frac{1}{\\sqrt{1-x^2}} & (\\arccos x)' &= -\\frac{1}{\\sqrt{1-x^2}} \\\\[3pt] (\\arctan x)' &= \\frac{1}{1+x^2} & (\\operatorname{arccot} x)' &= -\\frac{1}{1+x^2} \\\\[6pt] (u+v)' &= u'+v' & (u-v)' &= u'-v' & (cu)' &= cu' \\\\[3pt] (uv)' &= u'v+uv' & \\left(\\frac{u}{v}\\right)' &= \\frac{u'v-uv'}{v^2} & (f(u))' &= f'(u)\\,u' \\\\[6pt] (u^a)' &= a\\,u^{a-1}u' & (a^u)' &= a^u\\ln(a)\\,u' & (e^u)' &= e^u u' \\\\[3pt] (\\ln u)' &= \\frac{u'}{u} & (\\log_a u)' &= \\frac{u'}{u\\ln a} & (\\sqrt{u})' &= \\frac{u'}{2\\sqrt{u}} \\\\[3pt] (\\sin u)' &= \\cos(u)\\,u' & (\\cos u)' &= -\\sin(u)\\,u' & (\\tan u)' &= \\frac{u'}{\\cos^2 u} \\\\[3pt] (\\cot u)' &= -\\frac{u'}{\\sin^2 u} & (\\arcsin u)' &= \\frac{u'}{\\sqrt{1-u^2}} & (\\arccos u)' &= -\\frac{u'}{\\sqrt{1-u^2}} \\\\[3pt] (\\arctan u)' &= \\frac{u'}{1+u^2} & (\\operatorname{arccot} u)' &= -\\frac{u'}{1+u^2} \\\\[6pt] (\\sinh x)' &= \\cosh x & (\\cosh x)' &= \\sinh x & (\\tanh x)' &= \\frac{1}{\\cosh^2 x} \\\\[3pt] (\\coth x)' &= -\\frac{1}{\\sinh^2 x} \\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Arkusfunkcie sú inverzné funkcie k príslušným goniometrickým funkciám. Pri arcsin a arccos uvedené derivačné vzorce platia pre |x|<1. Dôležité je správne rozlíšiť jednotlivé vzorce a ich znamienka."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Grafický experiment: sínus hovorí, kosínus vysvetľuje"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Modrý graf je sínus a červený graf kosínus, teda jeho derivácia. Posúvajte bod a pozerajte sa na oba grafy naraz. Tak sa vzorec zmení na čitateľný príbeh o kopci."
            }
          ]
        },
        {
          "type": "geogebra",
          "title": "Sínus, kosínus a okamžitá zmena",
          "app": "graphing",
          "bounds": [
            -0.5,
            6.8,
            -1.5,
            1.5
          ],
          "commands": [
            "a=0",
            "f(x)=sin(x)",
            "g(x)=cos(x)",
            "A=(a,f(a))",
            "B=(a,g(a))",
            "T=Tangent(A,f)"
          ],
          "controls": [
            [
              "a",
              0,
              6.283,
              0.05,
              0
            ]
          ],
          "tasks": [
            {
              "text": "Nájdite prvý vrchol sínusu. Sledujte, že modrý bod je vysoko, dotyčnica je takmer vodorovná a červená hodnota derivácie je blízko nuly.",
              "condition": "a>1.52 && a<1.62 && abs(g(a))<0.06"
            },
            {
              "text": "Nájdite miesto po vrchole, kde sínus klesá najstrmšie. Sledujte prechod modrého grafu cez os a najnižšiu hodnotu červeného grafu.",
              "condition": "a>3.09 && a<3.19 && g(a)<-0.99"
            },
            {
              "text": "Nájdite minimum sínusu. Overte, že napriek najnižšej hodnote modrého grafu je okamžitá zmena znovu takmer nulová.",
              "condition": "a>4.66 && a<4.76 && abs(g(a))<0.06"
            }
          ],
          "expected": [
            "a",
            "f",
            "g",
            "A",
            "B",
            "T"
          ],
          "colors": {
            "f": [
              29,
              78,
              216
            ],
            "g": [
              220,
              38,
              38
            ],
            "A": [
              22,
              163,
              74
            ],
            "B": [
              147,
              51,
              234
            ],
            "T": [
              245,
              158,
              11
            ]
          },
          "fill": {},
          "open": [],
          "preserveStyle": true,
          "toolbar": true,
          "maxScore": 3,
          "tts": false,
          "interactionModel": "bodovana-graficka-uloha"
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Stručná sumarizácia"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Rozlišujte "
            },
            {
              "type": "formula",
              "tex": "x^a",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a "
            },
            {
              "type": "formula",
              "tex": "a^x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Exponenciála "
            },
            {
              "type": "formula",
              "tex": "e^x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je výnimočná tým, že sa derivovaním nemení. Pri sínuse je deriváciou kosínus: na vrchole a dne je zmena nulová, pri najstrmšom raste kladná a pri najstrmšom poklese záporná. Vzorce tak opisujú správanie grafu."
            }
          ]
        },
        {
          "type": "test",
          "title": "Exponenciálne a goniometrické derivácie",
          "source": "# Exponenciálne a goniometrické derivácie\n\n[ABCD]\nKtorý výsledok je správny?\n- (e^x)'=x e^(x-1)\n* (e^x)'=e^x\n- (e^x)'=ln(x)\n- (e^x)'=1/x\n\n[DROPDOWN]\nDerivácia funkcie sin(x) je {{výber}}.\n- -sin(x)\n* cos(x)\n- 1/cos²(x)\n- sin²(x)\n\n[ABCD]\nČo platí na hladkom vrchole sínusoidy?\n- Sínus je nulový a derivácia je maximálna.\n* Derivácia je nulová, pretože graf má vodorovnú dotyčnicu.\n- Derivácia neexistuje.\n- Kosínus je vždy kladný.\n\n[ODPOVEĎ]\nZderivuj funkciu 3e^x.\n= 3e^x | 3*e^x | 3eˣ\n\n[ABCD]\nKtorý výraz je deriváciou a^x?\n- xa^(x-1)\n- a^(x-1)\n* a^x ln(a)\n- 1/(a^x)",
          "maxScore": 5,
          "tts": false
        }
      ],
      "eyebrow": "Lekcia 4 z 8"
    },
    {
      "id": "derivacie-05-retazove-pravidlo-2",
      "courseId": "kurz-derivacie-doucko-2",
      "title": "5. Zložená funkcia a reťazové pravidlo",
      "custom": true,
      "maxScore": 10,
      "blocks": [
        {
          "type": "paragraph",
          "role": "hook",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Samotný prehľad jednoduchých vzorcov nestačí. Poznáme napríklad "
            },
            {
              "type": "formula",
              "tex": "(\\sin x)'=\\cos x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Na skúške však málokedy dostanete iba čisté "
            },
            {
              "type": "formula",
              "tex": "\\sin x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Vo vnútri býva ďalšia funkcia."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Vonkajšia a vnútorná funkcia"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri zloženej funkcii rozlišujeme vonkajšiu funkciu a jej argument. Sínus je v tomto príklade vonkajšia funkcia. Pri "
            },
            {
              "type": "formula",
              "tex": "\\sin(x^2+6x-3)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je vonkajšia funkcia sínus a vnútorná funkcia je "
            },
            {
              "type": "formula",
              "tex": "u(x)=x^2+6x-3",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Keď derivujeme celý objekt, najprv zachováme tvar vonkajšej funkcie podľa vzorca. Potom však musíme zderivovať aj to, čo je vo vnútri. To je reťazové pravidlo."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\bigl(F(u(x))\\bigr)'=F'(u(x))\\,u'(x)",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Skrytá jednotka pri jednoduchej funkcii"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Prečo v jednoduchom vzorci nevidíme vnútornú deriváciu? Pretože pri "
            },
            {
              "type": "formula",
              "tex": "\\sin x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je vnútorná funkcia iba "
            },
            {
              "type": "formula",
              "tex": "u(x)=x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a jej derivácia je 1."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "(\\sin x)'=\\cos x\\cdot1=\\cos x",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Tá jednotka je tam stále, iba sa nepíše, lebo výsledok nemení. Pri zložitej funkcii už vnútorná derivácia nemusí byť 1, a preto ju nesmieme vynechať."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Postup pri reťazovom pravidle"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "1.",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Nájdite vonkajšiu funkciu. "
            },
            {
              "type": "text",
              "text": "2.",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Jej jednoduchý vzorec prepíšte tak, že namiesto "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " ponecháte celý vnútorný výraz. "
            },
            {
              "type": "text",
              "text": "3.",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Za výsledok napíšte krát. "
            },
            {
              "type": "text",
              "text": "4.",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Zderivujte vnútorný výraz. "
            },
            {
              "type": "text",
              "text": "5.",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Ak je vo vnútri ďalšia zložená funkcia, postup zopakujte."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\underbrace{ F\\Bigl( \\underbrace{ u\\bigl( \\underbrace{v(x)}_{\\text{vnútorná}} \\bigr) }_{\\text{stredná funkcia}} \\Bigr) }_{\\text{vonkajšia funkcia}}",
          "display": "block",
          "tts": false
        },
        {
          "type": "formula",
          "tex": "f(x)=\\sin\\left(\\left[\\ln\\left(x^2+1\\right)\\right]^3\\right)\n\\begin{aligned} v(x)&=x^2+1, &&\\text{1. vnútorná funkcia},\\\\ u(v)&=\\ln(v), &&\\text{2. logaritmická funkcia},\\\\ P(u)&=u^3, &&\\text{3. mocninová funkcia},\\\\ F(P)&=\\sin(P), &&\\text{4. vonkajšia funkcia}. \\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Príklad: sínus polynómu"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Máme"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "f(x)=\\sin(x^2+6x-3)",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Vonkajšia funkcia je sínus, takže ju zderivujeme na kosínus. Do kosínusu neopíšeme iba "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", ale celý pôvodný argument. Potom pripojíme deriváciu vnútra."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}f'(x)&=\\cos(x^2+6x-3)\\cdot(x^2+6x-3)'\\\\&=\\cos(x^2+6x-3)\\cdot(2x+6)\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Typická nesprávna odpoveď je iba "
            },
            {
              "type": "formula",
              "tex": "\\cos(x^2+6x-3)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Tá by bola správna len vtedy, keby derivácia vnútra bola 1. Tu je však vnútorná derivácia "
            },
            {
              "type": "formula",
              "tex": "2x+6",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", takže musí zostať vo výsledku."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Všeobecné tvary zložených funkcií"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "V každom riadku sa opakuje rovnaký vzor: zderivujeme vonkajšiu funkciu, celý vnútorný výraz ponecháme na jeho miestach a nakoniec násobíme "
            },
            {
              "type": "formula",
              "tex": "u'(x)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}(u^a)'&=a u^{a-1}u'\\\\(a^u)'&=a^u\\ln(a)\\,u'\\\\(e^u)'&=e^u u'\\\\(\\log_a u)'&=\\frac{u'}{u\\ln a}\\\\(\\ln|u|)'&=\\frac{u'}{u}\\\\(\\sin u)'&=\\cos(u)u'\\\\(\\cos u)'&=-\\sin(u)u'\\\\(\\tan u)'&=\\frac{u'}{\\cos^2(u)}\\\\(\\cot u)'&=-\\frac{u'}{\\sin^2(u)}\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}(\\arcsin u)'&=\\frac{u'}{\\sqrt{1-u^2}}\\\\(\\arccos u)'&=-\\frac{u'}{\\sqrt{1-u^2}}\\\\(\\arctan u)'&=\\frac{u'}{1+u^2}\\\\(\\operatorname{arccot}u)'&=-\\frac{u'}{1+u^2}\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Dva ďalšie príklady rovnakou metódou"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri "
            },
            {
              "type": "formula",
              "tex": "g(x)=e^{3x^2}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je vonkajšia funkcia exponenciála so základom "
            },
            {
              "type": "formula",
              "tex": "e",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a vnútorná funkcia je "
            },
            {
              "type": "formula",
              "tex": "3x^2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "g'(x)=e^{3x^2}\\cdot(3x^2)'=e^{3x^2}\\cdot6x",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri "
            },
            {
              "type": "formula",
              "tex": "h(x)=\\ln|5x-1|",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " vonkajší vzorec vytvorí zlomok s pôvodným vnútrom v menovateli a deriváciou vnútra v čitateli. Funkcia aj jej derivácia sú definované pre x ≠ 1/5."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "h'(x)=\\frac{(5x-1)'}{5x-1}=\\frac{5}{5x-1}",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Keď je vrstiev viac, postup sa cyklí"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri funkcii "
            },
            {
              "type": "formula",
              "tex": "\\tan(\\sin(x^2))",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " máme tri vrstvy. Najprv derivujeme tangens, potom sínus a napokon "
            },
            {
              "type": "formula",
              "tex": "x^2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Každá vrstva pridá svoj faktor."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}\\bigl(\\tan(\\sin(x^2))\\bigr)'&=\\frac{1}{\\cos^2(\\sin(x^2))}\\cdot(\\sin(x^2))'\\\\&=\\frac{1}{\\cos^2(\\sin(x^2))}\\cdot\\cos(x^2)\\cdot2x\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Nestrácajte sa tým, že sa pokúsite urobiť všetko naraz. Vždy sa pýtajte: Čo je teraz vonkajší obal? Čo je v jeho vnútri? A potom choďte o jednu vrstvu hlbšie."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Grafický experiment: čo pokazí vynechaná vnútorná derivácia"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Modrý graf je "
            },
            {
              "type": "formula",
              "tex": "f(x)=\\sin(x^2+6x-3)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Červený graf je správna derivácia a oranžový graf je častá nesprávna odpoveď bez faktora "
            },
            {
              "type": "formula",
              "tex": "2x+6",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Posúvajte bod a sledujte, že nesprávny graf niekedy náhodou trafí správnu hodnotu, ale všeobecne neopisuje sklon modrého grafu."
            }
          ]
        },
        {
          "type": "geogebra",
          "title": "Správna a zabudnutá vnútorná derivácia",
          "app": "graphing",
          "bounds": [
            -7,
            1,
            -8,
            8
          ],
          "commands": [
            "p=-3",
            "u(x)=x^2+6*x-3",
            "f(x)=sin(u(x))",
            "d(x)=cos(u(x))*(2*x+6)",
            "w(x)=cos(u(x))",
            "A=(p,f(p))",
            "D=(p,d(p))",
            "W=(p,w(p))",
            "T=Tangent(A,f)",
            "dif=abs(d(p)-w(p))"
          ],
          "controls": [
            [
              "p",
              -6.5,
              0.5,
              0.05,
              -3
            ]
          ],
          "tasks": [
            {
              "text": "Nájdite miesto, kde je správna derivácia nulová preto, že vnútorná derivácia 2x+6 je nulová. Sledujte vodorovnú dotyčnicu modrého grafu a porovnajte ju s oranžovou nesprávnou hodnotou.",
              "condition": "p>-3.03 && p<-2.97 && abs(d(p))<0.05 && abs(w(p))>0.2"
            },
            {
              "text": "Dokážete nájsť miesto, kde sa nesprávna a správna derivácia náhodou takmer zhodujú? Zistite, akú hodnotu má vtedy faktor 2x+6 a prečo zhoda neplatí všeobecne.",
              "condition": "p>-2.53 && p<-2.47 && dif<0.08"
            },
            {
              "text": "Nájdite miesto, kde sa správna a nesprávna derivácia výrazne líšia. Sledujte, ktorá z nich súhlasí so sklonom dotyčnice k modrému grafu.",
              "condition": "dif>2.5"
            }
          ],
          "expected": [
            "p",
            "u",
            "f",
            "d",
            "w",
            "A",
            "D",
            "W",
            "T",
            "dif"
          ],
          "colors": {
            "f": [
              29,
              78,
              216
            ],
            "d": [
              220,
              38,
              38
            ],
            "w": [
              245,
              158,
              11
            ],
            "A": [
              22,
              163,
              74
            ],
            "D": [
              220,
              38,
              38
            ],
            "W": [
              245,
              158,
              11
            ],
            "T": [
              147,
              51,
              234
            ]
          },
          "fill": {},
          "open": [],
          "preserveStyle": true,
          "toolbar": true,
          "maxScore": 3,
          "tts": false,
          "interactionModel": "bodovana-graficka-uloha"
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Záverečný pracovný checklist"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pred odovzdaním derivácie si položte päť otázok. "
            },
            {
              "type": "text",
              "text": "Je to súčet?",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Derivujte člen po člene. "
            },
            {
              "type": "text",
              "text": "Je tam samostatná konštanta?",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Tá ide na nulu. "
            },
            {
              "type": "text",
              "text": "Je tam koeficient pri funkcii?",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Ten opíšte. "
            },
            {
              "type": "text",
              "text": "Je argument zložitejší než čisté x?",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Pridajte vnútornú deriváciu. "
            },
            {
              "type": "text",
              "text": "Je vo vnútri ďalšia vrstva?",
              "marks": [
                "bold"
              ]
            },
            {
              "type": "text",
              "text": " Pokračujte reťazovým pravidlom."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Stručná sumarizácia"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri jednoduchej funkcii je vnútornou funkciou "
            },
            {
              "type": "formula",
              "tex": "x",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a jej derivácia 1 sa nepíše. Pri zloženej funkcii musí byť vnútorná derivácia vo výsledku. Postup je vždy rovnaký: zderivovať vonkajší obal, ponechať celý vnútorný výraz, vynásobiť deriváciou vnútra a podľa potreby pokračovať do ďalšej vrstvy."
            }
          ]
        },
        {
          "type": "test",
          "title": "Reťazové pravidlo",
          "source": "# Reťazové pravidlo\n\n[ABCD]\nČo je vnútorná funkcia vo výraze sin(x²+6x-3)?\n- sin\n- cos\n* x²+6x-3\n- 2x+6\n\n[ABCD]\nKtorý výsledok je správny pre f(x)=sin(x²+6x-3)?\n- cos(x²+6x-3)\n- cos(2x+6)\n* cos(x²+6x-3)(2x+6)\n- sin(x²+6x-3)(2x+6)\n\n[DROPDOWN]\nPri jednoduchej funkcii sin(x) sa vnútorná derivácia rovná {{výber}}, preto sa bežne nepíše.\n- 0\n* 1\n- x\n- cos(x)\n\n[ODPOVEĎ]\nZderivuj funkciu e^(4x).\n= 4e^(4x) | 4*e^(4x)\n\n[ABCD]\nPrečo sa v derivácii 7x člen 7 nenuluje?\n- Pretože 7 je prvočíslo.\n* Pretože 7 je koeficient násobiaci funkciu x, nie samostatný sčítanec.\n- Pretože derivácia x je nula.\n- Pretože konštanty sa nikdy nederivujú.\n\n[ODPOVEĎ]\nZderivuj funkciu ln|3x-2|.\n= 3/(3x-2) | \\frac{3}{3x-2} | 3:(3x-2)\n\n[ABCD]\nPri funkcii tan(sin(x²)) sa reťazové pravidlo použije:\n- Ani raz.\n- Iba na x².\n* Opakovane, pretože funkcia má viac vnorených vrstiev.\n- Až po dosadení konkrétneho čísla.",
          "maxScore": 7,
          "tts": false
        }
      ],
      "eyebrow": "Lekcia 5 z 8"
    },
    {
      "id": "derivacie-06-retazove-pravidlo-vrstvy",
      "courseId": "kurz-derivacie-doucko-2",
      "title": "6. Reťazové pravidlo vo viacerých vrstvách",
      "custom": true,
      "maxScore": 5,
      "blocks": [
        {
          "type": "paragraph",
          "role": "hook",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri zložitejších príkladoch je najdôležitejšie určiť poradie vrstiev. Začíname vonkajšou funkciou a postupujeme dovnútra, až kým sa nedostaneme k jednoduchej derivácii."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Ako rozpoznať vrstvy"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Každá funkcia má argument. Ak je argumentom ďalšia funkcia, použijeme reťazové pravidlo opakovane. Každá vrstva pridá do výsledku jeden derivačný faktor."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\bigl(F(G(H(x)))\\bigr)'=F'(G(H(x)))\\,G'(H(x))\\,H'(x)",
          "display": "block",
          "tts": false
        },
        {
          "type": "formula",
          "tex": "f(x)=\\sin\\left(\\left[\\ln\\left(x^2+1\\right)\\right]^3\\right)\n\\begin{aligned} v(x)&=x^2+1, &&\\text{1. vnútorná funkcia},\\\\ u(v)&=\\ln(v), &&\\text{2. logaritmická funkcia},\\\\ P(u)&=u^3, &&\\text{3. mocninová funkcia},\\\\ F(P)&=\\sin(P), &&\\text{4. vonkajšia funkcia}. \\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Príklad 1: kosínus s polynómom a logaritmom"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Derivujme "
            },
            {
              "type": "formula",
              "tex": "f(x)=\\cos(6x^3-\\ln x+8)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Vnútorný logaritmus vyžaduje x>0. Vonkajšia funkcia je kosínus a jej argument opíšeme bez zmeny."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}f'(x)&=-\\sin(6x^3-\\ln x+8)\\,(6x^3-\\ln x+8)'\\\\&=-\\sin(6x^3-\\ln x+8)\\left(18x^2-\\frac1x\\right)\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Mínus pred sínusom pochádza z derivácie kosínusu. Člen 18x² − 1/x je derivácia celého vnútorného súčtu; samostatná osmička sa zderivuje na nulu."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Príklad 2: arkustangens mocniny"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri funkcii "
            },
            {
              "type": "formula",
              "tex": "g(x)=5\\arctan(x^2)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " je číslo 5 konštantný koeficient. Argumentom arkustangensu je x², nie samotné x."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}g'(x)&=5\\cdot\\frac{(x^2)'}{1+(x^2)^2}\\\\&=5\\cdot\\frac{2x}{1+x^4}=\\frac{10x}{1+x^4}\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Výraz (x²)² v menovateli je x⁴. Nesmie sa nahradiť iba x², pretože vo vzorci sa umocňuje celý argument arkustangensu."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Príklad 3: tri vnorené funkcie"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Vo funkcii "
            },
            {
              "type": "formula",
              "tex": "h(x)=\\arcsin\\!\\bigl(\\log_5(\\cos(3x+6))\\bigr)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " sú postupne vrstvy arcsin, logaritmus so základom 5, kosínus a lineárna funkcia 3x+6."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}h'(x)&=\\frac{1}{\\sqrt{1-\\left[\\log_5(\\cos(3x+6))\\right]^2}}\\\\&\\quad\\cdot\\frac{1}{\\cos(3x+6)\\ln5}\\cdot\\bigl[-\\sin(3x+6)\\bigr]\\cdot3\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Derivácia existuje iba tam, kde je cos(3x+6)>0 a zároveň hodnota logaritmu leží striktne medzi −1 a 1. Výsledok nemusíme za každú cenu zlučovať do jedného zlomku; rozložený súčin jasne ukazuje jednotlivé vrstvy."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Kontrola postupu"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Najprv označte vonkajšiu funkciu. Potom opíšte celý jej argument, pridajte jeho deriváciu a rovnaký postup opakujte dovnútra. Na konci skontrolujte znamienka, exponenty, definičný obor a to, či ste nezabudli deriváciu najvnútornejšej funkcie."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Stručná sumarizácia"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri každej ďalšej vrstve vzniká ďalší faktor. Celé argumenty sa pri derivovaní vonkajšej funkcie opisujú a menia sa až v samostatnom faktore vnútornej derivácie."
            }
          ]
        },
        {
          "type": "test",
          "title": "Viacvrstvové reťazové pravidlo",
          "source": "# Viacvrstvové reťazové pravidlo\n\n[ABCD]\nKtorá funkcia je vonkajšia vo výraze cos(6x³-ln(x)+8)?\n* cos\n- ln\n- 6x³\n- x\n\n[ABCD]\nAká je derivácia vnútorného výrazu 6x³-ln(x)+8?\n- 18x²+1/x\n* 18x²-1/x\n- 6x²-1/x\n- 18x³-1\n\n[DROPDOWN]\nV menovateli derivácie arctan(x²) sa nachádza 1+{{výber}}.\n- x²\n* x⁴\n- 2x\n- 4x\n\n[ODPOVEĎ]\nZderivuj funkciu 5arctan(x²).\n= 10x/(1+x^4) | 10x/(1+x⁴) | \\frac{10x}{1+x^4}\n\n[ABCD]\nPrečo sa pri viacvrstvovej funkcii objaví viac faktorov?\n- Pretože sa všetky exponenty sčítajú.\n- Pretože sa derivuje iba najvnútornejšia funkcia.\n* Pretože reťazové pravidlo sa použije na každú vnorenú vrstvu.\n- Pretože každá derivácia musí obsahovať logaritmus.",
          "maxScore": 5,
          "tts": false
        }
      ],
      "eyebrow": "Lekcia 6 z 8"
    },
    {
      "id": "derivacie-07-mocniny-odmocniny-zapis",
      "courseId": "kurz-derivacie-doucko-2",
      "title": "7. Mocniny, odmocniny a jednoznačný zápis",
      "custom": true,
      "maxScore": 5,
      "blocks": [
        {
          "type": "paragraph",
          "role": "hook",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri mocninách a odmocninách môže jediná zátvorka zmeniť význam celého výrazu. Pred derivovaním preto najprv prepíšeme zadanie do jednoznačného tvaru a skontrolujeme jeho definičný obor."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Na čo sa vzťahuje exponent"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zápis "
            },
            {
              "type": "formula",
              "tex": "(\\ln x)^2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " znamená druhú mocninu hodnoty logaritmu. Zápis "
            },
            {
              "type": "formula",
              "tex": "\\ln(x^2)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " znamená logaritmus argumentu x². Nie sú to rovnaké funkcie a majú odlišné derivácie aj definičné obory."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\bigl((\\ln x)^2\\bigr)'=\\frac{2\\ln x}{x},\\qquad \\bigl(\\ln(x^2)\\bigr)'=\\frac{2}{x}\\quad(x\\ne0)",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zátvorky jednoznačne ukazujú, či umocňujeme výsledok funkcie alebo jej vnútorný argument. Pri nejasnom zápise ich vždy doplňte ešte pred výpočtom."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Odmocninu prepíšeme ako mocninu"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Ak je základ kladný, môžeme odmocninu pohodlne prepísať pomocou zlomkového exponentu. Tým sa dostaneme k mocninovému a reťazovému pravidlu."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\sqrt[n]{u^m}=u^{m/n}\\qquad(u>0)",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Opravený príklad so štvrtou odmocninou"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Uvažujme funkciu "
            },
            {
              "type": "formula",
              "tex": "f(x)=\\sqrt[4]{[\\ln(\\cos x+5)]^3}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Keďže cos x+5 je vždy medzi 4 a 6, logaritmus je kladný a prepis na zlomkovú mocninu je bezpečný."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "f(x)=[\\ln(\\cos x+5)]^{3/4}",
          "display": "block",
          "tts": false
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}f'(x)&=\\frac34[\\ln(\\cos x+5)]^{-1/4}\\cdot\\frac{-\\sin x}{\\cos x+5}\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Najprv sa derivuje vonkajšia mocnina 3/4, potom logaritmus a napokon výraz cos x+5. Každá vrstva pridá vlastný faktor."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Premenná v menovateli"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri výraze "
            },
            {
              "type": "formula",
              "tex": "\\frac{3}{x^4}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " presunieme mocninu do čitateľa so záporným exponentom. Tento krok nemení definičný obor: stále musí platiť x≠0."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\frac{3}{x^4}=3x^{-4},\\qquad \\left(\\frac{3}{x^4}\\right)'=-12x^{-5}=-\\frac{12}{x^5}",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Najprv skontrolujte, či výraz obsahuje premennú"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Výraz zložený iba z čísel a konštánt, napríklad "
            },
            {
              "type": "formula",
              "tex": "\\sqrt[3]{\\pi^2+5}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ", je vzhľadom na x konštantný. Jeho derivácia podľa x je preto nula, hoci samotný zápis vyzerá zložito."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\left(\\sqrt[3]{\\pi^2+5}\\right)'=0",
          "display": "block",
          "tts": false
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Premenná nemusí byť x"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Ak derivujeme podľa t, potom t plní úlohu premennej a ostatné písmená sa považujú za konštanty, pokiaľ zadanie neurčí inak. Napríklad pri konštantnom a platí "
            },
            {
              "type": "formula",
              "tex": "\\frac{d}{dt}(at^3)=3at^2",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": "."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Stručná sumarizácia"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Doplňte zátvorky, odmocninu prepíšte na mocninu iba pri zachovaní definičných podmienok, výraz v menovateli môžete zapísať so záporným exponentom a pred výpočtom vždy overte, podľa ktorej premennej derivujete."
            }
          ]
        },
        {
          "type": "test",
          "title": "Mocniny, odmocniny a zápis",
          "source": "# Mocniny, odmocniny a zápis\n\n[ABCD]\nČo znamená zápis (ln(x))²?\n* Druhú mocninu hodnoty ln(x).\n- Logaritmus z x².\n- Druhú deriváciu logaritmu.\n- Logaritmus so základom 2.\n\n[ABCD]\nAko prepíšeme 3/x⁴ pomocou záporného exponentu?\n- 3x⁴\n* 3x^(-4)\n- x^(-12)\n- -3x⁴\n\n[ODPOVEĎ]\nZderivuj funkciu 3/x⁴.\n= -12/x^5 | -12/x⁵ | -12x^(-5) | -12x⁻⁵\n\n[DROPDOWN]\nAk výraz neobsahuje premennú, podľa ktorej derivujeme, jeho derivácia je {{výber}}.\n* 0\n- 1\n- samotný výraz\n- nedefinovaná\n\n[ABCD]\nPrečo sú pri mocninách funkcií dôležité zátvorky?\n- Menia každé plus na mínus.\n- Vždy odstránia definičný obor.\n* Určujú, na ktorý výraz sa exponent vzťahuje.\n- Nahrádzajú reťazové pravidlo.",
          "maxScore": 5,
          "tts": false
        }
      ],
      "eyebrow": "Lekcia 7 z 8"
    },
    {
      "id": "derivacie-08-sucin-a-podiel-2",
      "courseId": "kurz-derivacie-doucko-2",
      "title": "8. Derivácia súčinu a podielu funkcií",
      "custom": true,
      "maxScore": 5,
      "blocks": [
        {
          "type": "paragraph",
          "role": "hook",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pri súčte derivujeme člen po člene, ale pri násobení a delení dvoch funkcií to nestačí. Potrebujeme pravidlo pre súčin alebo podiel a až potom derivujeme vnútorné časti."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pravidlo pre súčin"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "(u\\,v)'=u'v+uv'",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Vytvoríme dva sčítance. V prvom zderivujeme prvú funkciu a druhú opíšeme. V druhom prvú opíšeme a zderivujeme druhú. Poradie faktorov možno vďaka komutatívnosti násobenia zameniť, ale oba sčítance musia zostať."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Príklad so zloženou exponenciálou"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Derivujme "
            },
            {
              "type": "formula",
              "tex": "f(x)=(x^2+1)e^{3x}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Prvou funkciou je x²+1 a druhou e^(3x)."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}f'(x)&=(x^2+1)'e^{3x}+(x^2+1)(e^{3x})'\\\\&=2x\\,e^{3x}+(x^2+1)\\,3e^{3x}\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "V druhom sčítanci sa pri exponenciále použilo aj reťazové pravidlo, pretože derivácia exponentu 3x je 3."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Konštantný faktor nepotrebuje pravidlo pre súčin"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Ak je jeden faktor konštanta, stačí ju opísať: "
            },
            {
              "type": "formula",
              "tex": "(5u)'=5u'",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Pravidlo pre súčin by dalo rovnaký výsledok, ale zbytočne by vytvorilo člen s deriváciou konštanty, teda s nulou."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pravidlo pre podiel"
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2},\\qquad v\\ne0",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "V čitateli zachováme poradie: derivácia čitateľa krát menovateľ mínus čitateľ krát derivácia menovateľa. V menovateli je druhá mocnina pôvodného menovateľa."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Zložitejší príklad"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Označme "
            },
            {
              "type": "formula",
              "tex": "N(x)=\\log_7(e^{3x}+\\cos x)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " a "
            },
            {
              "type": "formula",
              "tex": "D(x)=\\arcsin(x^2)",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": ". Najprv vypočítame ich derivácie samostatne."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "N'(x)=\\frac{3e^{3x}-\\sin x}{(e^{3x}+\\cos x)\\ln7}",
          "display": "block",
          "tts": false
        },
        {
          "type": "formula",
          "tex": "D'(x)=\\frac{2x}{\\sqrt{1-x^4}}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pre funkciu "
            },
            {
              "type": "formula",
              "tex": "q(x)=\\frac{N(x)}{D(x)}",
              "display": "inline",
              "tts": false
            },
            {
              "type": "text",
              "text": " potom použijeme pravidlo pre podiel."
            }
          ]
        },
        {
          "type": "formula",
          "tex": "\\begin{aligned}q'(x)=\\frac{\\displaystyle \\frac{3e^{3x}-\\sin x}{(e^{3x}+\\cos x)\\ln7}\\,\\arcsin(x^2)-\\log_7(e^{3x}+\\cos x)\\,\\frac{2x}{\\sqrt{1-x^4}}}{[\\arcsin(x^2)]^2}\\end{aligned}",
          "display": "block",
          "tts": false
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Derivácia je v uvedenom reálnom tvare definovaná pre −1<x<1 a x≠0. Koncové body vylučuje derivácia arcsin(x²) a bod x=0 vylučuje pôvodný menovateľ arcsin(x²)."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Pracovný postup bez straty zátvoriek"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Najprv označte celé funkcie u a v. Napíšte prázdnu štruktúru pravidla pre súčin alebo podiel, doplňte nederivované výrazy a až potom počítajte u′ a v′. Zátvorky ponechajte dovtedy, kým nie je jasné, ktoré časti patria k sebe."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Najčastejšie chyby"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Nesprávne je (uv)′=u′v′ aj (u/v)′=u′/v′. Pri podiele sa často zabudne mínus alebo druhá mocnina menovateľa. Pri zložených faktoroch sa navyše musí použiť reťazové pravidlo vo vnútri u′ alebo v′."
            }
          ]
        },
        {
          "type": "heading",
          "level": 2,
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Stručná sumarizácia"
            }
          ]
        },
        {
          "type": "paragraph",
          "role": "narrative",
          "tts": true,
          "content": [
            {
              "type": "text",
              "text": "Súčin vytvára súčet dvoch členov, podiel vytvára rozdiel v čitateli a druhú mocninu menovateľa. Samotné faktory môžu byť zložené funkcie, preto sa pravidlá pre súčin, podiel a reťazové pravidlo často kombinujú."
            }
          ]
        },
        {
          "type": "test",
          "title": "Súčin a podiel funkcií",
          "source": "# Súčin a podiel funkcií\n\n[ABCD]\nKtorý vzorec je správny pre deriváciu súčinu uv?\n- u'v'\n* u'v+uv'\n- u'v-uv'\n- u/v\n\n[ABCD]\nČo sa nachádza v menovateli derivácie podielu u/v?\n- u²\n* v²\n- u'v'\n- v'\n\n[ODPOVEĎ]\nZderivuj funkciu (x²+1)e^(3x).\n= 2x*e^(3x)+3(x^2+1)e^(3x) | 2xe^(3x)+3(x²+1)e^(3x)\n\n[DROPDOWN]\nV čitateli pravidla pre podiel je medzi členmi znamienko {{výber}}.\n- plus\n* mínus\n- krát\n- delené\n\n[ABCD]\nPrečo sa pri derivovaní e^(3x) objaví faktor 3?\n- Pretože e sa rovná 3.\n- Pretože používame pravidlo pre podiel.\n* Pretože podľa reťazového pravidla derivujeme aj exponent 3x.\n- Pretože každá exponenciála má deriváciu 3.",
          "maxScore": 5,
          "tts": false
        }
      ],
      "eyebrow": "Lekcia 8 z 8"
    }
  ],
  "appVersion": "V12",
  "backupCreatedAt": "2026-09-22T11:52:58.104Z"
};
