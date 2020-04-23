
-- 27th March 2020

-- create coutry table

create table Country (
id int auto_increment,
name varchar(120) not null unique key,
alpha2code varchar(2) not null unique key,
alpha3code varchar(3) not null unique key,
isonumeric smallint  not null unique key,
continent varchar(2) not null,
primary key (id) );

-- fill defaualt values in country table

insert into Country (alpha2code, alpha3code, isonumeric, name, continent)
values
(
'AF', 'AFG', 4, 'Afghanistan', 'AS'
),

(
'AL', 'ALB', 8, 'Albania', 'EU'
),

(
'DZ', 'DZA', 12, 'Algeria', 'AF'
),

(
'AS', 'ASM', 16, 'American Samoa', 'OC'
),

(
'AD', 'AND', 20, 'Andorra', 'EU'
),

(
'AO', 'AGO', 24, 'Angola', 'AF'
),

(
'AI', 'AIA', 660, 'Anguilla', 'NA'
),

(
'AQ', 'ATA', 10, 'Antarctica', 'AN'
),

(
'AG', 'ATG', 28, 'Antigua and Barbuda', 'NA'
),

(
'AR', 'ARG', 32, 'Argentina', 'SA'
),

(
'AM', 'ARM', 51, 'Armenia', 'AS'
),

(
'AW', 'ABW', 533, 'Aruba', 'NA'
),

(
'AU', 'AUS', 36, 'Australia', 'OC'
),

(
'AT', 'AUT', 40, 'Austria', 'EU'
),

(
'AZ', 'AZE', 31, 'Azerbaijan', 'AS'
),

(
'BS', 'BHS', 44, 'Bahamas', 'NA'
),

(
'BH', 'BHR', 48, 'Bahrain', 'AS'
),

(
'BD', 'BGD', 50, 'Bangladesh', 'AS'
),

(
'BB', 'BRB', 52, 'Barbados', 'NA'
),

(
'BY', 'BLR', 112, 'Belarus', 'EU'
),

(
'BE', 'BEL', 56, 'Belgium', 'EU'
),

(
'BZ', 'BLZ', 84, 'Belize', 'NA'
),

(
'BJ', 'BEN', 204, 'Benin', 'AF'
),

(
'BM', 'BMU', 60, 'Bermuda', 'NA'
),

(
'BT', 'BTN', 64, 'Bhutan', 'AS'
),

(
'BO', 'BOL', 68, 'Bolivia', 'SA'
),

(
'BQ', 'BES', 535, 'Bonaire, Sint Eustatius', 'NA'
),

(
'BA', 'BIH', 70, 'Bosnia and Herzegovina', 'EU'
),

(
'BW', 'BWA', 72, 'Botswana', 'AF'
),

(
'BV', 'BVT', 74, 'Bouvet Island', 'AN'
),

(
'BR', 'BRA', 76, 'Brazil', 'SA'
),

(
'IO', 'IOT', 86, 'British Indian Ocean Territory', 'AS'
),

(
'VG', 'VGB', 92, 'British Virgin Islands', 'NA'
),

(
'BN', 'BRN', 96, 'Brunei', 'AS'
),

(
'BG', 'BGR', 100, 'Bulgaria', 'EU'
),

(
'BF', 'BFA', 854, 'Burkina Faso', 'AF'
),

(
'BI', 'BDI', 108, 'Burundi', 'AF'
),

(
'CV', 'CPV', 132, 'Cabo Verde', 'AF'
),

(
'KH', 'KHM', 116, 'Cambodia', 'AS'
),

(
'CM', 'CMR', 120, 'Cameroon', 'AF'
),

(
'CA', 'CAN', 124, 'Canada', 'NA'
),

(
'KY', 'CYM', 136, 'Cayman Islands', 'NA'
),

(
'CF', 'CAF', 140, 'Central African Republic', 'AF'
),

(
'TD', 'TCD', 148, 'Chad', 'AF'
),

(
'CL', 'CHL', 152, 'Chile', 'SA'
),

(
'CN', 'CHN', 156, 'China', 'AS'
),

(
'CX', 'CXR', 162, 'Christmas Island', 'OC'
),

(
'CC', 'CCK', 166, 'Cocos [Keeling] Islands', 'AS'
),

(
'CO', 'COL', 170, 'Colombia', 'SA'
),

(
'KM', 'COM', 174, 'Comoros', 'AF'
),

(
'CG', 'COG', 178, 'Congo Republic', 'AF'
),

(
'CK', 'COK', 184, 'Cook Islands', 'OC'
),

(
'CR', 'CRI', 188, 'Costa Rica', 'NA'
),

(
'HR', 'HRV', 191, 'Croatia', 'EU'
),

(
'CU', 'CUB', 192, 'Cuba', 'NA'
),

(
'CW', 'CUW', 531, 'Curaçao', 'NA'
),

(
'CY', 'CYP', 196, 'Cyprus', 'EU'
),

(
'CZ', 'CZE', 203, 'Czechia', 'EU'
),

(
'CD', 'COD', 180, 'DR Congo', 'AF'
),

(
'DK', 'DNK', 208, 'Denmark', 'EU'
),

(
'DJ', 'DJI', 262, 'Djibouti', 'AF'
),

(
'DM', 'DMA', 212, 'Dominica', 'NA'
),

(
'DO', 'DOM', 214, 'Dominican Republic', 'NA'
),

(
'EC', 'ECU', 218, 'Ecuador', 'SA'
),

(
'EG', 'EGY', 818, 'Egypt', 'AF'
),

(
'SV', 'SLV', 222, 'El Salvador', 'NA'
),

(
'GQ', 'GNQ', 226, 'Equatorial Guinea', 'AF'
),

(
'ER', 'ERI', 232, 'Eritrea', 'AF'
),
(
'EE', 'EST', 233, 'Estonia', 'EU'
),

(
'SZ', 'SWZ', 748, 'Eswatini', 'AF'
),

(
'ET', 'ETH', 231, 'Ethiopia', 'AF'
),

(
'FK', 'FLK', 238, 'Falkland Islands', 'SA'
),

(
'FO', 'FRO', 234, 'Faroe Islands', 'EU'
),

(
'FJ', 'FJI', 242, 'Fiji', 'OC'
),

(
'FI', 'FIN', 246, 'Finland', 'EU'
),
(
'FR', 'FRA', 250, 'France', 'EU'
),

(
'GF', 'GUF', 254, 'French Guiana', 'SA'
),

(
'PF', 'PYF', 258, 'French Polynesia', 'OC'
),

(
'TF', 'ATF', 260, 'French Southern Territories', 'AN'
),

(
'GA', 'GAB', 266, 'Gabon', 'AF'
),

(
'GM', 'GMB', 270, 'Gambia', 'AF'
),

(
'GE', 'GEO', 268, 'Georgia', 'AS'
),

(
'DE', 'DEU', 276, 'Germany', 'EU'
),

(
'GH', 'GHA', 288, 'Ghana', 'AF'
),

(
'GI', 'GIB', 292, 'Gibraltar', 'EU'
),

(
'GR', 'GRC', 300, 'Greece', 'EU'
),

(
'GL', 'GRL', 304, 'Greenland', 'NA'
),

(
'GD', 'GRD', 308, 'Grenada', 'NA'
),

(
'GP', 'GLP', 312, 'Guadeloupe', 'NA'
),

(
'GU', 'GUM', 316, 'Guam', 'OC'
),

(
'GT', 'GTM', 320, 'Guatemala', 'NA'
),

(
'GG', 'GGY', 831, 'Guernsey', 'EU'
),

(
'GN', 'GIN', 324, 'Guinea', 'AF'
),

(
'GW', 'GNB', 624, 'Guinea-Bissau', 'AF'
),

(
'GY', 'GUY', 328, 'Guyana', 'SA'
),

(
'HT', 'HTI', 332, 'Haiti', 'NA'
),

(
'HM', 'HMD', 334, 'Heard Island and McDonald Islands', 'AN'
),

(
'HN', 'HND', 340, 'Honduras', 'NA'
),

(
'HK', 'HKG', 344, 'Hong Kong', 'AS'
),

(
'HU', 'HUN', 348, 'Hungary', 'EU'
),

(
'IS', 'ISL', 352, 'Iceland', 'EU'
),

(
'IN', 'IND', 356, 'India', 'AS'
),

(
'ID', 'IDN', 360, 'Indonesia', 'AS'
),

(
'IR', 'IRN', 364, 'Iran', 'AS'
),

(
'IQ', 'IRQ', 368, 'Iraq', 'AS'
),

(
'IE', 'IRL', 372, 'Ireland', 'EU'
),

(
'IM', 'IMN', 833, 'Isle of Man', 'EU'
),

(
'IL', 'ISR', 376, 'Israel', 'AS'
),

(
'IT', 'ITA', 380, 'Italy', 'EU'
),

(
'CI', 'CIV', 384, 'Ivory Coast', 'AF'
),

(
'JM', 'JAM', 388, 'Jamaica', 'NA'
),

(
'JP', 'JPN', 392, 'Japan', 'AS'
),

(
'JE', 'JEY', 832, 'Jersey', 'EU'
),

(
'JO', 'JOR', 400, 'Jordan', 'AS'
),

(
'KZ', 'KAZ', 398, 'Kazakhstan', 'AS'
),

(
'KE', 'KEN', 404, 'Kenya', 'AF'
),

(
'KI', 'KIR', 296, 'Kiribati', 'OC'
),

(
'XK', 'XKX', 0, 'Kosovo', 'EU'
),

(
'KW', 'KWT', 414, 'Kuwait', 'AS'
),

(
'KG', 'KGZ', 417, 'Kyrgyzstan', 'AS'
),

(
'LA', 'LAO', 418, 'Laos', 'AS'
),

(
'LV', 'LVA', 428, 'Latvia', 'EU'
),

(
'LB', 'LBN', 422, 'Lebanon', 'AS'
),

(
'LS', 'LSO', 426, 'Lesotho', 'AF'
),

(
'LR', 'LBR', 430, 'Liberia', 'AF'
),

(
'LY', 'LBY', 434, 'Libya', 'AF'
),

(
'LI', 'LIE', 438, 'Liechtenstein', 'EU'
),

(
'LT', 'LTU', 440, 'Lithuania', 'EU'
),

(
'LU', 'LUX', 442, 'Luxembourg', 'EU'
),

(
'MO', 'MAC', 446, 'Macao', 'AS'
),

(
'MG', 'MDG', 450, 'Madagascar', 'AF'
),

(
'MW', 'MWI', 454, 'Malawi', 'AF'
),

(
'MY', 'MYS', 458, 'Malaysia', 'AS'
),

(
'MV', 'MDV', 462, 'Maldives', 'AS'
),

(
'ML', 'MLI', 466, 'Mali', 'AF'
),

(
'MT', 'MLT', 470, 'Malta', 'EU'
),

(
'MH', 'MHL', 584, 'Marshall Islands', 'OC'
),

(
'MQ', 'MTQ', 474, 'Martinique', 'NA'
),

(
'MR', 'MRT', 478, 'Mauritania', 'AF'
),

(
'MU', 'MUS', 480, 'Mauritius', 'AF'
),

(
'YT', 'MYT', 175, 'Mayotte', 'AF'
),

(
'MX', 'MEX', 484, 'Mexico', 'NA'
),

(
'FM', 'FSM', 583, 'Micronesia', 'OC'
),

(
'MD', 'MDA', 498, 'Moldova', 'EU'
),

(
'MC', 'MCO', 492, 'Monaco', 'EU'
),

(
'MN', 'MNG', 496, 'Mongolia', 'AS'
),

(
'ME', 'MNE', 499, 'Montenegro', 'EU'
),

(
'MS', 'MSR', 500, 'Montserrat', 'NA'
),

(
'MA', 'MAR', 504, 'Morocco', 'AF'
),

(
'MZ', 'MOZ', 508, 'Mozambique', 'AF'
),

(
'MM', 'MMR', 104, 'Myanmar', 'AS'
),

(
'NA', 'NAM', 516, 'Namibia', 'AF'
),

(
'NR', 'NRU', 520, 'Nauru', 'OC'
),

(
'NP', 'NPL', 524, 'Nepal', 'AS'
),

(
'NL', 'NLD', 528, 'Netherlands', 'EU'
),

(
'AN', 'ANT', 530, 'Netherlands Antilles', 'NA'
),

(
'NC', 'NCL', 540, 'New Caledonia', 'OC'
),

(
'NZ', 'NZL', 554, 'New Zealand', 'OC'
),

(
'NI', 'NIC', 558, 'Nicaragua', 'NA'
),

(
'NE', 'NER', 562, 'Niger', 'AF'
),

(
'NG', 'NGA', 566, 'Nigeria', 'AF'
),

(
'NU', 'NIU', 570, 'Niue', 'OC'
),

(
'NF', 'NFK', 574, 'Norfolk Island', 'OC'
),

(
'KP', 'PRK', 408, 'North Korea', 'AS'
),

(
'MK', 'MKD', 807, 'North Macedonia', 'EU'
),

(
'MP', 'MNP', 580, 'Northern Mariana Islands', 'OC'
),

(
'NO', 'NOR', 578, 'Norway', 'EU'
),

(
'OM', 'OMN', 512, 'Oman', 'AS'
),

(
'PK', 'PAK', 586, 'Pakistan', 'AS'
),

(
'PW', 'PLW', 585, 'Palau', 'OC'
),

(
'PS', 'PSE', 275, 'Palestine', 'AS'
),

(
'PA', 'PAN', 591, 'Panama', 'NA'
),

(
'PG', 'PNG', 598, 'Papua New Guinea', 'OC'
),

(
'PY', 'PRY', 600, 'Paraguay', 'SA'
),

(
'PE', 'PER', 604, 'Peru', 'SA'
),

/* INSERT QUERY NO: 176 */


(
'PH', 'PHL', 608, 'Philippines', 'AS'
),

/* INSERT QUERY NO: 177 */


(
'PN', 'PCN', 612, 'Pitcairn Islands', 'OC'
),
(
'PL', 'POL', 616, 'Poland', 'EU'
),
(
'PT', 'PRT', 620, 'Portugal', 'EU'
),
(
'PR', 'PRI', 630, 'Puerto Rico', 'NA'
),
(
'QA', 'QAT', 634, 'Qatar', 'AS'
),
(
'RO', 'ROU', 642, 'Romania', 'EU'
),
(
'RU', 'RUS', 643, 'Russia', 'EU'
),
(
'RW', 'RWA', 646, 'Rwanda', 'AF'
),
(
'RE', 'REU', 638, 'Réunion', 'AF'
),
(
'BL', 'BLM', 652, 'Saint Barthélemy', 'NA'
),
(
'SH', 'SHN', 654, 'Saint Helena', 'AF'
),
(
'LC', 'LCA', 662, 'Saint Lucia', 'NA'
),
(
'MF', 'MAF', 663, 'Saint Martin', 'NA'
),
(
'PM', 'SPM', 666, 'Saint Pierre and Miquelon', 'NA'
),
(
'WS', 'WSM', 882, 'Samoa', 'OC'
),
(
'SM', 'SMR', 674, 'San Marino', 'EU'
),
(
'SA', 'SAU', 682, 'Saudi Arabia', 'AS'
),
(
'SN', 'SEN', 686, 'Senegal', 'AF'
),
(
'RS', 'SRB', 688, 'Serbia', 'EU'
),
(
'CS', 'SCG', 891, 'Serbia and Montenegro', 'EU'
),
(
'SC', 'SYC', 690, 'Seychelles', 'AF'
),
(
'SL', 'SLE', 694, 'Sierra Leone', 'AF'
),
(
'SG', 'SGP', 702, 'Singapore', 'AS'
),
(
'SX', 'SXM', 534, 'Sint Maarten', 'NA'
),
(
'SK', 'SVK', 703, 'Slovakia', 'EU'
),
(
'SI', 'SVN', 705, 'Slovenia', 'EU'
),
(
'SB', 'SLB', 90, 'Solomon Islands', 'OC'
),
(
'SO', 'SOM', 706, 'Somalia', 'AF'
),
(
'ZA', 'ZAF', 710, 'South Africa', 'AF'
),
(
'GS', 'SGS', 239, 'South Georgia and South Sandwich Islands', 'AN'
),
(
'KR', 'KOR', 410, 'South Korea', 'AS'
),
(
'SS', 'SSD', 728, 'South Sudan', 'AF'
),
(
'ES', 'ESP', 724, 'Spain', 'EU'
),
(
'LK', 'LKA', 144, 'Sri Lanka', 'AS'
),
(
'KN', 'KNA', 659, 'St Kitts and Nevis', 'NA'
),
(
'VC', 'VCT', 670, 'St Vincent and Grenadines', 'NA'
),
(
'SD', 'SDN', 729, 'Sudan', 'AF'
),
(
'SR', 'SUR', 740, 'Suriname', 'SA'
),
(
'SJ', 'SJM', 744, 'Svalbard and Jan Mayen', 'EU'
),
(
'SE', 'SWE', 752, 'Sweden', 'EU'
),
(
'CH', 'CHE', 756, 'Switzerland', 'EU'
),
(
'SY', 'SYR', 760, 'Syria', 'AS'
),
(
'ST', 'STP', 678, 'São Tomé and Príncipe', 'AF'
),
(
'TW', 'TWN', 158, 'Taiwan', 'AS'
),
(
'TJ', 'TJK', 762, 'Tajikistan', 'AS'
),
(
'TZ', 'TZA', 834, 'Tanzania', 'AF'
),
(
'TH', 'THA', 764, 'Thailand', 'AS'
),
(
'TL', 'TLS', 626, 'Timor-Leste', 'OC'
),
(
'TG', 'TGO', 768, 'Togo', 'AF'
),
(
'TK', 'TKL', 772, 'Tokelau', 'OC'
),
(
'TO', 'TON', 776, 'Tonga', 'OC'
),
(
'TT', 'TTO', 780, 'Trinidad and Tobago', 'NA'
),
(
'TN', 'TUN', 788, 'Tunisia', 'AF'
),
(
'TR', 'TUR', 792, 'Turkey', 'AS'
),
(
'TM', 'TKM', 795, 'Turkmenistan', 'AS'
),
(
'TC', 'TCA', 796, 'Turks and Caicos Islands', 'NA'
),
(
'TV', 'TUV', 798, 'Tuvalu', 'OC'
),
(
'UM', 'UMI', 581, 'U.S. Minor Outlying Islands', 'OC'
),
(
'VI', 'VIR', 850, 'U.S. Virgin Islands', 'NA'
),
(
'UG', 'UGA', 800, 'Uganda', 'AF'
),
(
'UA', 'UKR', 804, 'Ukraine', 'EU'
),
(
'AE', 'ARE', 784, 'United Arab Emirates', 'AS'
),
(
'GB', 'GBR', 826, 'United Kingdom', 'EU'
),
(
'US', 'USA', 840, 'United States', 'NA'
),
(
'UY', 'URY', 858, 'Uruguay', 'SA'
),
(
'UZ', 'UZB', 860, 'Uzbekistan', 'AS'
),
(
'VU', 'VUT', 548, 'Vanuatu', 'OC'
),
(
'VA', 'VAT', 336, 'Vatican City', 'EU'
),
(
'VE', 'VEN', 862, 'Venezuela', 'SA'
),
(
'VN', 'VNM', 704, 'Vietnam', 'AS'
),
(
'WF', 'WLF', 876, 'Wallis and Futuna', 'OC'
),
(
'EH', 'ESH', 732, 'Western Sahara', 'AF'
),(
'YE', 'YEM', 887, 'Yemen', 'AS'
),
(
'ZM', 'ZMB', 894, 'Zambia', 'AF'
),
(
'ZW', 'ZWE', 716, 'Zimbabwe', 'AF'
),
(
'AX', 'ALA', 248, 'Åland', 'EU'
);

-- create state

create table State (
id int auto_increment,
name varchar(120) not null,
countryId int not null, 
loccode varchar(6) not null,
status varchar(2) not null,
isHidden boolean default false,
created datetime default current_timestamp,
updated datetime default current_timestamp on update current_timestamp,
index countryIndex (countryId),
foreign key (countryId)
	references Country(id)
    on delete cascade,
primary key (id) );

-- insert value in state for afghanistan

insert into State (loccode, name, status, countryid)
values
    ('AF ASH','Ali Shirzayi','RQ',1),
    ('AF BAG','Bagram','RL',1),
    ('AF BIN','Bamian','AI',1),
    ('AF BEP','Bazar-E-Panjwai','RQ',1),
    ('AF BST','Bost','AI',1),
    ('AF CBN','Camp Bastion','RQ',1),
    ('AF CDW','Camp Dwyer','RQ',1),
    ('AF CLN','Camp Leatherneck','RL',1),
    ('AF CSO','Camp Salerno','RL',1),
    ('AF CWO','Camp Wolverine','RQ',1),
    ('AF CCN','Chaghcharan','AI',1),
    ('AF DAZ','Darwaz','AI',1),
    ('AF DHD','Dehdadi','RL',1),
    ('AF ISQ','Eslam Qal''eh','RL',1),
    ('AF FBD','Faizabad','AI',1),
    ('AF FAH','Farah','AI',1),
    ('AF FRO','FOB Frontenac','RQ',1),
    ('AF RMD','FOB Ramrod','RQ',1),
    ('AF SHK','FOB Shank','RQ',1),
    ('AF GRG','Gardez','AI',1),
    ('AF GAR','Gardiz','RL',1),
    ('AF GZI','Ghazni','AI',1),
    ('AF HRT','Hairatan','RQ',1),
    ('AF HEA','Herat','AI',1),
    ('AF JAA','Jalalabad','AI',1),
    ('AF KBL','Kabul','AI',1),
    ('AF KMU','Kamu','RQ',1),
    ('AF KDH','Kandahar','AI',1),
    ('AF KHT','Khost','AI',1),
    ('AF KWT','Khowst','RL',1),
    ('AF KHO','Khowst','RL',1),
    ('AF KWH','Khwahan','AI',1),
    ('AF UND','Kunduz','AI',1),
    ('AF KUR','Kuran-O-Munjan','AI',1),
    ('AF LAG','Lashkar Gah','RL',1),
    ('AF MMZ','Maimana','AI',1),
    ('AF MWD','Maiwand','RL',1),
    ('AF MAS','Mashad','RQ',1),
    ('AF MZR','Mazar-i-Sharif','AI',1),
    ('AF MEH','Mehtar Lam','RL',1),
    ('AF MEY','Meydan','RL',1),
    ('AF IMZ','Nimroz','AI',1),
    ('AF ORG','Orgun-E Kalan','RL',1),
    ('AF PSD','Pasaband','RL',1),
    ('AF PEC','Pol-e Charkhi','RL',1),
    ('AF LQN','Qala Nau','AI',1),
    ('AF QLT','Qalat','RL',1),
    ('AF QYN','Qal''Eh-Ye Now','RQ',1),
    ('AF QAM','Qasim','RQ',1),
    ('AF SBF','Sardeh Band','AI',1),
    ('AF SRO','Sharona','RL',1),
    ('AF SGA','Sheghnan','AI',1),
    ('AF SHE','Sherhan-Bandar','RL',1),
    ('AF SDD','Shindand','RQ',1),
    ('AF SBK','Spin Boldak','RL',1),
    ('AF TQN','Taluqan','AI',1),
    ('AF TKO','Tarin Kowt','RL',1),
    ('AF TII','Tirinkot','AI',1),
    ('AF TGH','Torghundi','RQ',1),
    ('AF RKH','Torkham','RL',1),
    ('AF TOW','Towraghondi','RL',1),
    ('AF URN','Urgoon','AI',1),
    ('AF URZ','Uruzgan','AI',1),
    ('AF ZAJ','Zaranj','AI',1),
    ('AF ZHA','Zhari Dasht','RQ',1);

    -- insert states for indai

    insert into State (loccode, name, status, countryid)
values
    ('IN NRP','Aal-SEZ/Vishakhapatnam','RQ',102.0),
    ('IN API','Aap-SEZ/Ahmedabad','RQ',102.0),
    ('IN ABH','Abohar','RL',102.0),
    ('IN ABU','Abu Road','RL',102.0),
    ('IN ACK','Acharapakkam','AA',102.0),
    ('IN ACH','Achra','AA',102.0),
    ('IN APL','Acpl Cfs/Dadri','RQ',102.0),
    ('IN AKM','Adakamaranahalli','RL',102.0),
    ('IN ADK','Adambakkam','RL',102.0),
    ('IN QRP','Adani Icd/Kila Raipur','AA',102.0),
    ('IN ABD','Adilabad','RL',102.0),
    ('IN ADL','Adimali','RL',102.0),
    ('IN ADP','Adipur','RL',102.0),
    ('IN ADY','Adyar','RL',102.0),
    ('IN CJA','AEIP SEZ/Kancheepuram','AA',102.0),
    ('IN BWS','Afs/Kapashera','AA',102.0),
    ('IN IXA','Agartala','AI',102.0),
    ('IN AGX','Agatti Island','AI',102.0),
    ('IN AGR','Agra','AA',102.0),
    ('IN AGA','Agucha','RL',102.0),
    ('IN AMD','Ahmedabad','AA',102.0),
    ('IN MUM','Ahmednagar','RL',102.0),
    ('IN BPS','Air Parcel Sorting Office/Mumbai','AA',102.0),
    ('IN AJL','Aizawl','AI',102.0),
    ('IN AJI','Ajmer','RL',102.0),
    ('IN AKD','Akola','AI',102.0),
    ('IN ALA','Alang SBY','RN',102.0),
    ('IN AGU','Alangulam','RL',102.0),
    ('IN ABG','Alibag','AA',102.0),
    ('IN ALG','Aligarh','RL',102.0),
    ('IN APR','Alipore','RL',102.0),
    ('IN ALI','Alirajpur','RL',102.0),
    ('IN IXD','Allahabad','AI',102.0),
    ('IN ALF','Alleppey','AA',102.0),
    ('IN IXV','Along Apt','RL',102.0),
    ('IN ALP','Alpl Cfs/Dadri','RL',102.0),
    ('IN ALW','Alwar','RL',102.0),
    ('IN AMB','Ambad','RL',102.0),
    ('IN ACT','Ambala Cantonment','RQ',102.0),
    ('IN AMR','Ambatturai (Ambathurai)','RL',102.0),
    ('IN ABN','Ambernath','RL',102.0),
    ('IN AMT','Amethi','AA',102.0),
    ('IN AMG','Amingaon (Gauhati)','AA',102.0),
    ('IN AIS','Amini Island','RQ',102.0),
    ('IN ATQ','Amritsar','AA',102.0),
    ('IN NNN','Amrlitcl-SEZ/Nanguneri','RQ',102.0),
    ('IN ANA','Ana','RL',102.0),
    ('IN QNB','Anand','RL',102.0),
    ('IN ASH','Anandpur Sahib','RL',102.0),
    ('IN APH','Anantapur','RL',102.0),
    ('IN APT','Anaparti','AA',102.0),
    ('IN ADE','Andheri East','RL',102.0),
    ('IN AMI','Andorth Is','AA',102.0),
    ('IN ADI','Androth Is','AA',102.0),
    ('IN ANO','Angul','RL',102.0),
    ('IN ANG','Anijengo','AA',102.0),
    ('IN AKV','Ankleshwar','RL',102.0),
    ('IN ANU','Anuppur','RL',102.0),
    ('IN AKP','APIICL SEZ/Visakhapatnam','RQ',102.0),
    ('IN GLY','APIICL-SEZ/Mahabaoobnagar','RQ',102.0),
    ('IN MDE','APIICL-SEZ/Medak','RQ',102.0),
    ('IN FMA','APIICL-SEZ/Ranga Reddy','RQ',102.0),
    ('IN MEA','APIIC-SEZ/Lalgadi','AF',102.0),
    ('IN DLH','Apllp Sez/Bangalore','AA',102.0),
    ('IN GRW','Apm Icd/Bhamboli-Khed','AA',102.0),
    ('IN ARK','Arakkonam','RL',102.0),
    ('IN ARI','Ariyalur','RL',102.0),
    ('IN ANL','Arnala','AA',102.0),
    ('IN ARR','Aroor','AA',102.0),
    ('IN PNV','Arshiya International Ltd.-SEZ/Panvel','RQ',102.0),
    ('IN DAR','Artha Sez/Greater Noida','AA',102.0),
    ('IN SPE','Asdipl-SEZ/Nellore','RQ',102.0),
    ('IN ASL','Aslali','AA',102.0),
    ('IN ATT','Attari','AA',102.0),
    ('IN ATR','Attari Road','AA',102.0),
    ('IN ATU','Attur','RL',102.0),
    ('IN AUR','Auraiya','RL',102.0),
    ('IN AWM','Aurangabad','RL',102.0),
    ('IN IXU','Aurangabad','AI',102.0),
    ('IN AZK','Azhikkal','AA',102.0),
    ('IN PNP','Babarpur','AA',102.0),
    ('IN BDG','Badagara','AA',102.0),
    ('IN BBM','Badami','RL',102.0),
    ('IN BDI','Baddi','RL',102.0),
    ('IN IXB','Bagdogra','AA',102.0),
    ('IN BGM','Baghamara','AA',102.0),
    ('IN BBP','Bahabal Pur','AA',102.0),
    ('IN BAH','Bahadurgarh','RL',102.0),
    ('IN BUR','Baharampur','RL',102.0),
    ('IN BHH','Bahraich','RL',102.0),
    ('IN BDR','Baindur','AA',102.0),
    ('IN BGU','Bairgania','AA',102.0),
    ('IN BLG','Balanagar','RL',102.0),
    ('IN BAG','Balangir','RL',102.0),
    ('IN BLS','Balasore','RL',102.0),
    ('IN BLT','Balet','AA',102.0),
    ('IN BGH','Ballabgarh','RL',102.0),
    ('IN BLL','Ballia','RL',102.0),
    ('IN BAL','Balotra','RL',102.0),
    ('IN BRR','Balrampur','RL',102.0),
    ('IN RGH','Balurghat','AI',102.0),
    ('IN BSA','Banbasa','AA',102.0),
    ('IN BND','Banddar','RL',102.0),
    ('IN BDA','Bandra','AA',102.0),
    ('IN BLR','Bangalore','AA',102.0),
    ('IN BPT','Bangarapet','RL',102.0),
    ('IN BKT','Bankot','AA',102.0),
    ('IN BKR','Bankura','RL',102.0),
    ('IN BAN','Banswara','RL',102.0),
    ('IN BRT','Baramati','RL',102.0),
    ('IN BAA','Baran','RL',102.0),
    ('IN BNI','Barauni','RL',102.0),
    ('IN RRA','Barbil','RL',102.0),
    ('IN BAE','Bardhaman','RL',102.0),
    ('IN BEK','Bareilly','AA',102.0),
    ('IN BRG','Bargarh','RL',102.0),
    ('IN BMP','Bargawan','RL',102.0),
    ('IN BBH','Bari Brahmana','RL',102.0),
    ('IN BMR','Barmer','AA',102.0),
    ('IN BAR','Barnala','RL',102.0),
    ('IN BRC','Baroda','AA',102.0),
    ('IN UPH','Barotiwala','RL',102.0),
    ('IN BRP','Barpeta','RL',102.0),
    ('IN BRA','Barsora','AA',102.0),
    ('IN BWL','Barwala','RL',102.0),
    ('IN JUX','Basni','RN',102.0),
    ('IN BSN','Bassain','AA',102.0),
    ('IN BAS','Basti','RL',102.0),
    ('IN BTD','Bathinda','RL',102.0),
    ('IN BOU','Bauda','RL',102.0),
    ('IN BAW','Bawal','RL',102.0),
    ('IN KJR','Bbrel Sez/Kundalahalli','AA',102.0),
    ('IN KJM','Bd Sez/Bangalore','AA',102.0),
    ('IN BED','Bedi','AA',102.0),
    ('IN BEE','Beed','RL',102.0),
    ('IN BLP','Belapur','AA',102.0),
    ('IN BLK','Belekeri','AA',102.0),
    ('IN IXG','Belgaum','AI',102.0),
    ('IN BEP','Bellary','AI',102.0),
    ('IN BTL','Beltola','RL',102.0),
    ('IN BNY','Berhni','AA',102.0),
    ('IN BEL','Betul','RL',102.0),
    ('IN BET','Betul','AA',102.0),
    ('IN BEY','Beypore','RL',102.0),
    ('IN BYT','Beyt','AA',102.0),
    ('IN BAD','Bhaddi','RL',102.0),
    ('IN BDH','Bhadohi','RL',102.0),
    ('IN BHK','Bhadrakh','RL',102.0),
    ('IN BGW','Bhagwa','AA',102.0),
    ('IN BHP','Bhagwanpur','AA',102.0),
    ('IN BHA','Bharatpur','RL',102.0),
    ('IN BRU','Bharuch','RL',102.0),
    ('IN BUP','Bhatinda','AA',102.0),
    ('IN BTK','Bhatkal','AA',102.0),
    ('IN BHU','Bhavnagar','AA',102.0),
    ('IN BHW','Bhawanigarh','AA',102.0),
    ('IN BYD','Bhayandar','RL',102.0),
    ('IN BHM','Bheemunipatnam','RL',102.0),
    ('IN BTP','Bhetapara','RL',102.0),
    ('IN BIL','Bhilad','AA',102.0),
    ('IN BHI','Bhilai','RL',102.0),
    ('IN BHL','Bhilwara','AA',102.0),
    ('IN 9BH','Bhimasar','RL',102.0),
    ('IN BMV','Bhimavaram','RQ',102.0),
    ('IN BNR','Bhimnagar','AA',102.0),
    ('IN BHN','Bhind','RL',102.0),
    ('IN BTM','Bhithamore (Sursnad)','AA',102.0),
    ('IN BWD','Bhiwadi','AA',102.0),
    ('IN BWN','Bhiwandi','AA',102.0),
    ('IN BW2','Bhiwani','RL',102.0),
    ('IN VGR','Bhojva Icd/Viramgam','AA',102.0),
    ('IN BHO','Bhopal','AI',102.0),
    ('IN BBI','Bhubaneswar','AA',102.0),
    ('IN BHJ','Bhuj','AI',102.0),
    ('IN BSL','Bhusawal','AA',102.0),
    ('IN AKB','BIACPL SEZ/Visakhapatnam','RQ',102.0),
    ('IN BID','Bidar','RQ',102.0),
    ('IN BJP','Bijapur','RQ',102.0),
    ('IN BKB','Bikaner','AI',102.0),
    ('IN BRI','Bikaner','RL',102.0),
    ('IN PAB','Bilaspur','AI',102.0),
    ('IN BLM','Bilimora','AA',102.0),
    ('IN SBC','Biocon-SEZ/Bangalore','RQ',102.0),
    ('IN DLO','Birpara Lcs','AA',102.0),
    ('IN BPR','Bistupur','RL',102.0),
    ('IN BTR','Bitra Is','AA',102.0),
    ('IN BSC','Bokaro Steel City','RL',102.0),
    ('IN BOL','Bolanganj','AA',102.0),
   --  ('IN','Bombay = Mumbai (ex Bombay)',NULL,102.0),
    ('IN BON','Bongaigaon','RL',102.0),
    ('IN BOP','Bonthapally','AA',102.0),
    ('IN BRN','Boranada, Jodhpur','AA',102.0),
    ('IN BWR','Borawar','RL',102.0),
    ('IN BOK','Borkhedi ICD/Nagpur','AA',102.0),
    ('IN BRM','Borliai-Mandla','AA',102.0),
    ('IN BRY','Borya','AA',102.0),
    ('IN BRH','Broach','AA',102.0),
    ('IN PNB','BTSL SEZ/Pune','AA',102.0),
    ('IN BUU','Budaun','RL',102.0),
    ('IN BUD','Budge-Budge','RL',102.0),
    ('IN BSR','Bulsar','AA',102.0),
    ('IN BUN','Bundala','RL',102.0),
    ('IN NGB','Butibori ICD/Nagpur','AA',102.0),
    -- ('IN','Calcutta = Kolkata (ex Calcutta)',NULL,102.0),
    ('IN CAP','Calingapatam','RL',102.0),
    ('IN CAM','Cambay','RL',102.0),
    ('IN CNN','Cannanore','RL',102.0),
    ('IN CBD','Car Nicobar','AI',102.0),
    ('IN CAR','Carijam','QQ',102.0),
    ('IN TNC','Ccclil-SEZ/Tuticorin','RQ',102.0),
    ('IN ADC','Ccipl-SEZ/Ahmadabad','RQ',102.0),
    ('IN SPC','Cclpil Sez/Visakhapatnam','AA',102.0),
    ('IN CPC','Cgml Cfs/Dadri','RQ',102.0),
    ('IN ADR','Cgrpl-SEZ/Ahmadabad','RQ',102.0),
    ('IN CKN','Chakan','RL',102.0),
    ('IN CHP','Champai','AA',102.0),
    ('IN CHM','Chamurci','AA',102.0),
    ('IN CSM','Chanasma','RL',102.0),
    ('IN CBL','Chandbali','RL',102.0),
    ('IN IXC','Chandigarh','AI',102.0),
    ('IN CHA','Chandrapur','RL',102.0),
    ('IN CHG','Changanacherry','AA',102.0),
    ('IN CRB','Changrabandha','AA',102.0),
    ('IN CHR','Chapora','AA',102.0),
    ('IN CSI','Chattrapati Shivaji International Apt','RL',102.0),
    ('IN CPR','Chawapayal ICD/Samrala','AA',102.0),
    ('IN CPU','Chengalpattu','RL',102.0),
    ('IN CGN','Chengannur','RL',102.0),
    ('IN MAA','Chennai (ex Madras)','AA',102.0),
    ('IN CTI','Chetlat Is','AA',102.0),
    ('IN PUZ','Chetpet','RL',102.0),
    ('IN VTC','Cheyyar-SEZ/Vellore','RQ',102.0),
    ('IN CHN','Chhani/Vadodora','RL',102.0),
    ('IN CHH','Chhatarpur','RL',102.0),
    ('IN CDM','Chidambaram','RL',102.0),
    ('IN CHI','Chikaballur','RQ',102.0),
    ('IN CKH','Chikalthana','RL',102.0),
    ('IN CHY','Chimakurthy','AA',102.0),
    ('IN CHV','Chinchvad','RL',102.0),
    ('IN CST','Chinchwad Station','RQ',102.0),
    ('IN CBC','CHIPL SEZ/Coimbatore','AA',102.0),
    ('IN CPL','Chiplun','RQ',102.0),
    ('IN CLX','Chirala','AA',102.0),
    ('IN CHW','Chirawa','RL',102.0),
    ('IN CKA','Chirkunda','RL',102.0),
    ('IN CHT','Chittoor','RL',102.0),
    ('IN CHO','Chittorgarh','RL',102.0),
    ('IN CHS','Cholapuram','RL',102.0),
    ('IN CHL','Choolai','RL',102.0),
    ('IN CHU','Churu','RL',102.0),
    ('IN TMX','CMTL ICD/Thimmapur','AA',102.0),
    ('IN COK','Cochin','AA',102.0),
    ('IN CJB','Coimbatore','AA',102.0),
    ('IN COL','Colochel','QQ',102.0),
    ('IN BLE','Concor ICD/Balasore','AA',102.0),
    ('IN JSG','Concor ICD/Jharsuguda','AA',102.0),
    ('IN KPK','Concor Icd/Mihan','AA',102.0),
    ('IN RML','Concor Icd/Nayaraipur','AA',102.0),
    ('IN BVC','Concor-ICD/Ballabhgarh','AF',102.0),
    ('IN CON','Contai','RL',102.0),
    ('IN COH','Cooch Behar','AI',102.0),
    ('IN COO','Coondapur (Ganguly)','AA',102.0),
    ('IN CNR','Coonoor','RQ',102.0),
    ('IN CRN','Cornwallis','AA',102.0),
    ('IN COS','Cossipore','RL',102.0),
    ('IN TBC','CTSI SEZ/Siruseri','AA',102.0),
    ('IN CDL','Cuddalore','AA',102.0),
    ('IN CDP','Cuddapah','AI',102.0),
    ('IN CUT','Cuttack','RL',102.0),
    ('IN DHP','Dabhol Port','AA',102.0),
    ('IN DRL','Dabolim','RL',102.0),
    ('IN DAD','Dadra','RL',102.0),
    ('IN DRI','Dadri','RL',102.0),
    ('IN DCT','Dadri Container Terminal','RL',102.0),
    ('IN DER','Dadri ICD/Noida','RQ',102.0),
    ('IN DHU','Dahanu','AA',102.0),
    ('IN DAH','Dahej','AA',102.0),
    ('IN BHD','Dahez SEZ','RQ',102.0),
    ('IN DLU','Dalu','AA',102.0),
    ('IN DAM','Daman','AA',102.0),
    ('IN DAO','Damoh','RL',102.0),
    ('IN DTW','Dantiwara','AA',102.0),
    ('IN DAE','Daparizo','AI',102.0),
    ('IN DPR','Dappar','AA',102.0),
    ('IN DAI','Darjeeling','AI',102.0),
    ('IN DRG','Darranga','AA',102.0),
    ('IN DRA','Dashrath Puri','RL',102.0),
    ('IN RTR','Dasrath','RL',102.0),
    ('IN DAT','Datia','RL',102.0),
    ('IN DLB','Daulatabad','AA',102.0),
    ('IN DAU','Dausa','RL',102.0),
    ('IN DWK','Dawki','AA',102.0),
    ('IN CDD','DCA-I SEZ/Chandigarh','AA',102.0),
    ('IN CDC','DCA-II SEZ/Chandigarh','AA',102.0),
    ('IN DEE','Deesa (Disa)','RL',102.0),
    ('IN DED','Dehra Dun','AI',102.0),
    ('IN HRI','Dehri','RQ',102.0),
    ('IN KML','Deipl Sez/Kurubarapalli','AA',102.0),
    ('IN DEL','Delhi','AA',102.0),
    ('IN DMR','Demagir','AA',102.0),
    ('IN DEG','Deogad','AA',102.0),
    ('IN DEB','Deogarh','RL',102.0),
    ('IN DEO','Deoria','RL',102.0),
    ('IN DEP','Deparizo','AI',102.0),
    ('IN DBA','Dera Bassi','RL',102.0),
    ('IN DTM','Devathanam/Tiruchirappalli','RL',102.0),
    ('IN DEW','Dewas','RQ',102.0),
    ('IN DHL','Dhalaighat','AA',102.0),
    ('IN DMA','Dhamara','RL',102.0),
    ('IN DMQ','Dhamra Port','RL',102.0),
    ('IN DBD','Dhanbad','AI',102.0),
    ('IN DHA','Dhannad/Indore','RL',102.0),
    ('IN DSK','Dhanu-shkodi','AA',102.0),
    ('IN HRD','Dhar','RL',102.0),
    ('IN DHM','Dharamsala','AI',102.0),
    ('IN DMT','Dharamtar','AA',102.0),
    ('IN DPM','Dharapuram','RL',102.0),
    ('IN DLA','Dharchula','AA',102.0),
    ('IN DPI','Dharmapuri','RL',102.0),
    ('IN DRH','Dharuhera','RL',102.0),
    ('IN DHW','Dharwad','RL',102.0),
    ('IN DHE','Dhemaji','RL',102.0),
    ('IN DNK','Dhenkanal','RL',102.0),
    ('IN DHR','Dholera','AA',102.0),
    ('IN DHK','Dholka','RL',102.0),
    ('IN DHO','Dholpur','RL',102.0),
    ('IN DHB','Dhubri Steamerghat','AA',102.0),
    ('IN DLE','Dhule','RQ',102.0),
    ('IN DIB','Dibrugarh','AI',102.0),
    ('IN DIG','Dighi (Pune)','AA',102.0),
    ('IN DMU','Dimapur','AI',102.0),
    ('IN DIL','Dindigul','RL',102.0),
    ('IN DIN','Dindori','RL',102.0),
    ('IN VLD','Dishman-Pharmaceutical-SEZ/Kalyangadh','AF',102.0),
    ('IN DIU','Diu','AI',102.0),
    ('IN DIV','Div','AA',102.0),
    ('IN CJD','DLFC SEZ/Kancheepuram','AA',102.0),
    ('IN VZM','Dll SEZ/Visakhapatnam','RQ',102.0),
    ('IN LPS','DSIL SEZ/Ranga Reddy','AA',102.0),
    ('IN DGP','Dungapur','RL',102.0),
    ('IN DUR','Durgapur','RL',102.0),
    ('IN DWA','Dwarka','RL',102.0),
    ('IN DRK','Dwarka (Rupen)','AA',102.0),
    ('IN JBL','E-Complex-SEZ/Amreli','RQ',102.0),
    ('IN CEC','ECTN SEZ/Coimbatore','AA',102.0),
    ('IN CJE','ECTN SEZ/Kancheepuram','AA',102.0),
    ('IN HSA','ECTN SEZ/Krishnagiri','AA',102.0),
    ('IN MEC','ECTN SEZ/Madurai-I','AA',102.0),
    ('IN MDC','ECTN SEZ/Madurai-II','AA',102.0),
    ('IN SXE','ECTN SEZ/Salem','AA',102.0),
    ('IN TPJ','ECTN SEZ/Tiruchirapalli','AA',102.0),
    ('IN MAE','ECTNL SEZ/Gangaikondan','AF',102.0),
    ('IN EDP','Edappally','RL',102.0),
    ('IN GMR','Egmore','RL',102.0),
    ('IN PEK','EKIPL SEZ/Pune','AA',102.0),
    ('IN EOR','Eloor','RL',102.0),
    ('IN ESH','Elphinstone Harbour','AA',102.0),
    ('IN ELU','Eluru','RL',102.0),
    ('IN ENR','Ennore','AA',102.0),
    ('IN PUE','Eon SEZ/Kharadi','AA',102.0),
    ('IN EKM','Ernakulam','RL',102.0),
    ('IN ERO','Erode','RL',102.0),
    ('IN CGE','ETA SEZ/Kancheepuram','AA',102.0),
    ('IN ETA','Etah','RL',102.0),
    ('IN UKL','Etlisl-SEZ/Erode','RQ',102.0),
    ('IN BCO','Euro Multivision Bhachau-SEZ/Kutch','RQ',102.0),
    ('IN URF','FAB City SPV-SEZ/Srinagar&Raviryal','AF',102.0),
    ('IN FLT','Falta','RL',102.0),
    ('IN FAR','Farakka','RL',102.0),
    ('IN FBD','Faridabad','AA',102.0),
    ('IN FBE','Faridabad','RL',102.0),
    ('IN FRD','Faridkot','RL',102.0),
    ('IN FTS','Fatehgarh Sahib','RL',102.0),
    ('IN FTP','Fatehpur','RL',102.0),
    ('IN CFI','FIPL SEZ/Kancheepuram','AA',102.0),
    ('IN FZD','Firozabad','RL',102.0),
    ('IN FIR','Firozpur','RL',102.0),
    ('IN GDP','Fllpl-SEZ/Thirruvallur','RQ',102.0),
    ('IN BPL','FPO BHOPAL/BHOPAL','AA',102.0),
    ('IN PNF','FPO PATNA/PATNA','AA',102.0),
    ('IN RNC','FPO RANCHI/RANCHI','AA',102.0),
    ('IN FCH','Fpo(Sea)/Chennai','AA',102.0),
    ('IN CJF','Ftil-SEZ/Sriperumbudur','RQ',102.0),
    ('IN GJP','Gajapati','RL',102.0),
    ('IN GUJ','Gajraula','RL',102.0),
    ('IN GAL','Galgalia','AA',102.0),
    ('IN GAB','Ganderbal','RL',102.0),
    ('IN GAN','Gandhar','RQ',102.0),
    ('IN GIN','Gandhidham','AA',102.0),
    ('IN GDH','Gandhinagar','RL',102.0),
    ('IN GGR','Ganganagar','RL',102.0),
    ('IN GGV','Gangavaram','RL',102.0),
    ('IN GAT','Gangtok','RL',102.0),
    ('IN GAJ','Ganjam','RL',102.0),
    ('IN GRR','Garden Reach','RL',102.0),
    ('IN GHR','Garhi Harsaru','AA',102.0),
    ('IN GWA','Garhwa','RL',102.0),
    ('IN GAU','Gauhati (Panidi)','RL',102.0),
    ('IN GAI','Gauriphanta','AA',102.0),
    ('IN GNU','Gautam Budh Nagar','RL',102.0),
    ('IN GAY','Gaya','AA',102.0),
    ('IN GED','Gede','AA',102.0),
    ('IN GTZ','Getandah','AA',102.0),
    ('IN GHP','Ghasuapara','AA',102.0),
    ('IN GZB','Ghaziabad','RL',102.0),
    ('IN UDN','Ghb-SEZ/Surat','RQ',102.0),
    ('IN GHA','Ghogha','AA',102.0),
    ('IN GJX','Ghojadanga','AA',102.0),
    ('IN GNG','Gidc-SEZ/Gandhinagar','RQ',102.0),
    ('IN ADG','Gipl-SEZ/Ahmadabad','RQ',102.0),
    ('IN GTG','Gitaldah Road','AA',102.0),
    ('IN URG','GMR Hyderabad Aviation-SEZ/Mamidipally','AF',102.0),
    ('IN GOI','Goa','AI',102.0),
    ('IN GOA','Goalpara','RL',102.0),
    ('IN HEB','GOCL SEZ/Bangalore','AA',102.0),
    ('IN GAH','Godhra','RL',102.0),
    ('IN GGA','Gogha','AA',102.0),
    ('IN GOL','Golaghat','RL',102.0),
    ('IN GKJ','Golakganj','AA',102.0),
    ('IN GON','Gonda','RL',102.0),
    ('IN GDA','Gondia','RL',102.0),
    ('IN GPP','Gopalpur','AA',102.0),
    ('IN GPR','Gopalpur','AA',102.0),
    ('IN GOP','Gorakhpur','AI',102.0),
    ('IN GNP','GPRPL SEZ/Gurgaon','AA',102.0),
    ('IN GND','Greater Nodia','RQ',102.0),
    ('IN GNO','Greater Noida','RQ',102.0),
    ('IN BFR','GRFL ICD/Ballabhgarh','RL',102.0),
    ('IN SGF','GRFL ICD/Sahnwewal','AA',102.0),
    ('IN GUD','Güdür','RL',102.0),
    ('IN GUL','Gulabpura','RL',102.0),
    ('IN GBA','Gulbarga','RL',102.0),
    ('IN GUA','Gumla','RL',102.0),
    ('IN GUM','Gummidipoondi','RQ',102.0),
    ('IN GMM','Gummidipundi','RL',102.0),
    ('IN GUX','Guna','AI',102.0),
    ('IN GJI','Gunji','AA',102.0),
    ('IN GTR','Guntur','RL',102.0),
    ('IN GDR','Gurdaspur','RL',102.0),
    ('IN HHG','Gurgaon','RL',102.0),
    ('IN GGN','Gurgaon','RL',102.0),
    ('IN GAW','Guwahati','RL',102.0),
    ('IN GWL','Gwalior','AI',102.0),
    ('IN HAI','Hailakandi','RL',102.0),
    ('IN HAL','Haldia','AA',102.0),
    ('IN HLD','Haldibari','AA',102.0),
    ('IN HLO','Halol','RL',102.0),
    ('IN HGT','Hangarkatta','AA',102.0),
    ('IN HGH','Hanumangarh','RL',102.0),
    ('IN HRA','Haora','RL',102.0),
    ('IN HAA','Harda','RL',102.0),
    ('IN HAO','Hardoi','RL',102.0),
    ('IN HRN','Harnai','AA',102.0),
    ('IN HAR','Haryana','RL',102.0),
    ('IN HAS','Hassan','AA',102.0),
    ('IN HTS','Hatisar','AA',102.0),
    ('IN HZR','Hazira','RL',102.0),
    ('IN HZA','Hazira Port/Surat','RL',102.0),
    ('IN LCH','HCL SEZ/Lucknow','AA',102.0),
    ('IN HND','Hemnagar Lcs','AA',102.0),
    ('IN FMH','Hgsezl-SEZ/Ranga Reddy','RQ',102.0),
    ('IN HLI','Hilli','AA',102.0),
    ('IN HIP','Himachal Pradesh','RQ',102.0),
    ('IN HNG','Himatnagar','AA',102.0),
    ('IN HAN','Hindaun ICD/Karauli','AA',102.0),
    ('IN HDR','Hindupur','RL',102.0),
    ('IN HGL','Hingalganj','AA',102.0),
    ('IN HIN','Hingoli','RL',102.0),
    ('IN TNI','Hipl SEZ/Visakhapatnam','RQ',102.0),
    ('IN HPR','Hirapur','RL',102.0),
    ('IN TBH','HIRL SEZ/Kancheepuram','AA',102.0),
    ('IN HSS','Hissar','AI',102.0),
    ('IN VKH','HNB SEZ/Mumbai','AA',102.0),
    ('IN HON','Honavar','RL',102.0),
    ('IN HWR','Honawar','AA',102.0),
    ('IN HOS','Hoshiarpur','RL',102.0),
    ('IN HPT','Hospet','RL',102.0),
    ('IN HSR','Hosur','RL',102.0),
    ('IN HSU','HOSUR ICD','RL',102.0),
    ('IN HOW','Howrah','RL',102.0),
    ('IN TBS','HTL SEZ/Siruseri','AF',102.0),
    ('IN HBX','Hubli','AI',102.0),
    ('IN TSI','HVCPL SEZ/KADAYAM','AA',102.0),
    ('IN HYD','Hyderabad','AA',102.0),
    ('IN AIK','Ibrahimpur Icd/Khurja','AA',102.0),
    ('IN JJK','ICD JSL/JAJPUR','AA',102.0),
    ('IN IDU','Idukki','RL',102.0),
    ('IN CJI','IG3I SEZ/Kancheepuram','AA',102.0),
    ('IN PKD','Igel Sez/Kodur-Settipali','AA',102.0),
    ('IN AII','IGGSL SEZ/Thane','RL',102.0),
    ('IN INI','IIPL SEZ/Indore','AF',102.0),
    ('IN DWR','Il Sez/Hubli','AA',102.0),
    ('IN IMF','Imphal','AA',102.0),
    ('IN NDP','Indapur','RL',102.0),
    ('IN IDR','Indore','AA',102.0),
    ('IN IND','Indrad','AA',102.0),
    ('IN KNK','INFOPARK SEZ/Koratty','AA',102.0),
    ('IN HLE','Infosys Electronic City Sez/Begur Hobli','AA',102.0),
    ('IN DEF','Infosys Sez/Dadri','AA',102.0),
    ('IN INN','INFOSYS SEZ/Indore','AF',102.0),
    ('IN SAS','Infosys Sez/Mohali','AA',102.0),
    ('IN GBN','Ingau','RQ',102.0),
    ('IN IRU','Irungattukottai','RL',102.0),
    ('IN ILP','Irungattukottai-Ilp-ICD','RQ',102.0),
    ('IN ISP','Islampur','AA',102.0),
    ('IN ITA','Itanagar','RL',102.0),
    ('IN BAU','IT-ITES-A-SEZ/Ulwe','RQ',102.0),
    ('IN BAI','IT-ITES-B-SEZ/Ulwe','RQ',102.0),
    ('IN BAT','IT-ITES-C-SEZ/Ulwe','AF',102.0),
    ('IN KLN','IT-ITES-SEZ/Kalamboli','AF',102.0),
    ('IN PIT','ITL SEZ/Pune','AA',102.0),
    ('IN GTI','ITL SEZ/Ranga Reddy','AA',102.0),
    ('IN WFT','Itpl Sezii/Whitefield','AA',102.0),
    ('IN JLR','Jabalpur','AI',102.0),
    ('IN JCH','Jadcheria','RL',102.0),
    ('IN JBD','Jafarabad','AA',102.0),
    ('IN JTD','Jagatdal','AA',102.0),
    ('IN JAG','Jagatsinghpur','RL',102.0),
    ('IN JGB','Jagdalpur','AI',102.0),
    ('IN JHD','Jahanabad','RL',102.0),
    ('IN JGD','Jaigad','AA',102.0),
    ('IN JIG','Jaigaon','AA',102.0),
    ('IN JAI','Jaipur','AA',102.0),
    ('IN KKU','Jaipur-Kanakpura','RN',102.0),
    ('IN JSZ','Jaipur-Sitapura','AA',102.0),
    ('IN JSA','Jaisalmer','AI',102.0),
    ('IN JTP','Jaitapur','AA',102.0),
    ('IN JAJ','Jajpur','RL',102.0),
    ('IN JAK','Jakhau','AA',102.0),
    ('IN JUC','Jalandhar','AA',102.0),
    ('IN JAL','Jalgaon','AA',102.0),
    ('IN JAN','Jalna','RL',102.0),
    ('IN JAO','Jalore','RL',102.0),
    ('IN JPG','Jalpaiguri','AA',102.0),
    ('IN IXJ','Jammu','AI',102.0),
    ('IN JGA','Jamnagar','AI',102.0),
    ('IN IXW','Jamshedpur','AI',102.0),
    ('IN JNL','Janaula','RL',102.0),
    ('IN JWA','Jarwa','AA',102.0),
    ('IN JPR','Jaunpur','RQ',102.0),
    ('IN NSA','Jawaharlal Nehru (Nhava Sheva)','AA',102.0),
    ('IN JAY','Jayanagar','AA',102.0),
    ('IN JAD','Jehanabad','RL',102.0),
    ('IN PYB','Jeypore','AI',102.0),
    ('IN CJG','JGHIPL SEZ/Sriperumbudur','AA',102.0),
    ('IN JHB','Jhabua','RL',102.0),
    ('IN JHA','Jhagadia','RQ',102.0),
    ('IN JJR','Jhajjar','AA',102.0),
    ('IN JLW','Jhalawar','RL',102.0),
    ('IN JHR','Jharsuguda','RL',102.0),
    ('IN JHO','Jhulaghat (Pithoragarh)','AA',102.0),
    ('IN JJN','Jhunjhunu','RL',102.0),
    ('IN JIN','Jind','AA',102.0),
    ('IN CJJ','JMFTZ-SEZ/Mannur','AF',102.0),
    ('IN JDG','Jodhpur','RL',102.0),
    ('IN JDH','Jodhpur','AA',102.0),
    ('IN BGK','Jodhpur-Bhagat Ki Kothi','RN',102.0),
    ('IN THA','Jodhpur-Thar','RN',102.0),
    ('IN JDA','Jodia','AA',102.0),
    ('IN JBN','Jogbani','AA',102.0),
    ('IN RIC','Johdpur ICD','RL',102.0),
    ('IN JRH','Jorhat','AI',102.0),
    ('IN BHC','Jubilant-Chemical-SEZ/Vilayat','AF',102.0),
    ('IN QJU','Jullundur','RL',102.0),
    ('IN JUN','Junagadh','RQ',102.0),
    ('IN KGM','Kachigam','AA',102.0),
    ('IN KDI','Kadmat Is','AA',102.0),
    ('IN KAG','Kagal','RL',102.0),
    ('IN KKL','Kaikalur','RL',102.0),
    ('IN IXH','Kailashahar','AI',102.0),
    ('IN KWH','Kakarahawa Lcs','AA',102.0),
    ('IN KAK','Kakinada','AA',102.0),
    ('IN KKK','Kakkanad','RL',102.0),
    ('IN KRA','Kakrala','RL',102.0),
    ('IN KAA','Kala Amb','RL',102.0),
    ('IN KHN','Kalahandi','RL',102.0),
    ('IN KLE','Kalamboli','RL',102.0),
    ('IN KAL','Kallai','AA',102.0),
    ('IN KPI','Kalpeni Island','RQ',102.0),
    ('IN KLY','Kalyan','AA',102.0),
    ('IN IXQ','Kamalpur','AI',102.0),
    ('IN PBL','Kamardwisa Lcs','AA',102.0),
    ('IN KAM','Kampur','RL',102.0),
    ('IN KKP','Kanakapura','RQ',102.0),
    ('IN MAB','Kanara','RL',102.0),
    ('IN KCP','Kanchipuram','RL',102.0),
    ('IN KHL','Kandhamal','RL',102.0),
    ('IN IXY','Kandla','AA',102.0),
    ('IN KDL','Kandla-SEZ/Gandhidham','RQ',102.0),
    ('IN SNI','Kanech ICD/Sahnewal','AA',102.0),
    ('IN KND','Kankudy','AA',102.0),
    ('IN KNN','Kannur','AA',102.0),
    ('IN KNU','Kanpur','AA',102.0),
    ('IN KKM','Kanyakumari','RQ',102.0),
    ('IN KAP','Kapadra (Surat)','AA',102.0),
    ('IN KPT','Kapurthala','RL',102.0),
    ('IN KRK','Karaikal','AA',102.0),
    ('IN UTQ','Karamadi','RL',102.0),
    ('IN KMD','Karamsad','RL',102.0),
    ('IN KRN','Karanja','AA',102.0),
    ('IN KAU','Karauli','RL',102.0),
    ('IN KAN','Karbi Anglong','RL',102.0),
    ('IN KDD','Karedu','AA',102.0),
    ('IN KRG','Karegaon','RL',102.0),
    ('IN KIM','Karimganj','RL',102.0),
    ('IN KMR','Karimnagar','RL',102.0),
    ('IN KRL','Karnal','RQ',102.0),
    ('IN KAR','Karur','AA',102.0),
    ('IN KRW','Karwar','AA',102.0),
    ('IN KSG','Kasargod','AA',102.0),
    ('IN KSR','Kashipur','RL',102.0),
    ('IN KWD','Kasrawad','RL',102.0),
    ('IN KTG','Katarniyaghat','AA',102.0),
    ('IN KTR','Kathinhar','AA',102.0),
    ('IN CML','Kathuwas Icd/Alwar','AA',102.0),
    ('IN KAI','Katni','RL',102.0),
    ('IN KAT','Kattupalli','RL',102.0),
    ('IN KTP','Kattupalli Port','RL',102.0),
    ('IN KVT','Kavaram Is','AA',102.0),
    ('IN KVI','Kavi','AA',102.0),
    ('IN BNC','Kbits-SEZ/Bangalore','RQ',102.0),
    ('IN KEL','Kel Sahar Subdivision','AA',102.0),
    ('IN KSH','Kelshi','AA',102.0),
    ('IN KIW','Kelwa','AA',102.0),
    ('IN KNP','Kendrapara','RL',102.0),
    ('IN KHR','Kendujhar','RL',102.0),
    ('IN KEO','Keonjhar','RL',102.0),
    ('IN MDU','Kern Icd/Madurai','AA',102.0),
    ('IN IXK','Keshod','AI',102.0),
    ('IN HJR','Khajuraho','AI',102.0),
    ('IN KLP','Khalapur','RQ',102.0),
    ('IN KHI','Khambhaliya','RL',102.0),
    ('IN KBT','Khambhat','RL',102.0),
    ('IN KGA','Khamgaon','RL',102.0),
    ('IN KHM','Khammam','RL',102.0),
    ('IN KHS','Khandsha','AA',102.0),
    ('IN KGR','Kharagpur','RQ',102.0),
    ('IN WSI','Kharsawan','RL',102.0),
    ('IN KHU','Khatauli','RL',102.0),
    ('IN KHA','Khatima','RQ',102.0),
    ('IN KHE','Kheda','RL',102.0),
    ('IN KHD','Kheda/Dhar','RL',102.0),
    ('IN LAH','Kheri','RL',102.0),
    ('IN KHO','Khodiyar','RL',102.0),
    ('IN KPL','Khopoli','RQ',102.0),
    ('IN KHP','Khopta','AA',102.0),
    ('IN IXN','Khowai','AI',102.0),
    ('IN KWG','Khowaighat','AA',102.0),
    ('IN KWA','Khunwa','AA',102.0),
    ('IN HSF','Kiadbfp-SEZ/Hassan','RQ',102.0),
    ('IN HSP','Kiadbp-SEZ/Hassan','RQ',102.0),
    ('IN HST','Kiadbt-SEZ/Hassan','RQ',102.0),
    ('IN KKR','Kilakari','AA',102.0),
    ('IN KTI','Kiltan Is','AA',102.0),
    ('IN TVC','Kinfraa-SEZ/Thiruvananthapuram','RQ',102.0),
    ('IN CCT','Kinfrafp-SEZ/Kozhikkode','RQ',102.0),
    ('IN PUI','Kippl-Gdpl Sez/Kharadi','AA',102.0),
    ('IN KRP','Kiranpani','AA',102.0),
    ('IN KIT','Kishtwar','RL',102.0),
    ('IN PNK','Klppl-ICD/Panki','RQ',102.0),
    ('IN KOC','Kochi','AI',102.0),
    ('IN KDM','Kodambakkam','RQ',102.0),
    ('IN KDA','Kodarma (Koderma)','RL',102.0),
    ('IN KOD','Kodinar','RL',102.0),
    ('IN KDR','Kodungallur','RL',102.0),
    ('IN KTW','Koheshwar','AA',102.0),
    ('IN KOI','Koilthottum','RL',102.0),
    ('IN KOK','Koka','AA',102.0),
    ('IN KOR','Kokrajhar','RL',102.0),
    ('IN KOL','Kolabira','RL',102.0),
    ('IN KLR','Kolar','RQ',102.0),
    ('IN KLH','Kolhåpur','AI',102.0),
    ('IN CCU','Kolkata (ex Calcutta)','AA',102.0),
    ('IN BNK','Kolkata IT Park/Bantala','AF',102.0),
    ('IN KUK','Kollam','AA',102.0),
    ('IN KCI','Konakanchi','RL',102.0),
    ('IN KON','Konarak','RL',102.0),
    ('IN KDP','Kondiapetnam','AA',102.0),
    ('IN KRT','Koraput','RL',102.0),
    ('IN KGN','Koregaon','RL',102.0),
    ('IN KTU','Kota','AA',102.0),
    ('IN MHD','Kotawalighat (Mohedipur)','AA',102.0),
    ('IN KTD','Kotda','AA',102.0),
    ('IN KOT','Kothagudem','RL',102.0),
    ('IN KYM','Kottayam','RL',102.0),
    ('IN KTT','Kottivakkam','RL',102.0),
    ('IN KVL','Kovalam','AA',102.0),
    ('IN VPT','Kovilpatti','RL',102.0),
    ('IN KYD','Koyambedu','RQ',102.0),
    ('IN CCJ','Kozhikode (ex Calicut)','AA',102.0),
    ('IN KBC','Kril ICD','RL',102.0),
    ('IN PKR','KRIL ICD/Pali','RL',102.0),
    ('IN KGI','Krishnagiri','RL',102.0),
    ('IN KRI','Krishnapatnam','AA',102.0),
    ('IN COA','Kspl-SEZ/Kakinada','RQ',102.0),
    ('IN KSP','Kulasekarapanam','AA',102.0),
    ('IN KUL','Kulgam','RL',102.0),
    ('IN KMA','Kulkuli Lcs','AA',102.0),
    ('IN KUU','Kulu','AI',102.0),
    ('IN KBM','Kumbakonam','RL',102.0),
    ('IN KMB','Kumbharu','AA',102.0),
    ('IN KMH','Kumhrar','RL',102.0),
    ('IN KNL','Kunauli','AA',102.0),
    ('IN KUD','Kundapur','RL',102.0),
    ('IN KUN','Kundla','RL',102.0),
    ('IN KUI','Kundli','RL',102.0),
    ('IN KUS','Kushinagar','RL',102.0),
    ('IN LIM','Lakhimpur','RL',102.0),
    ('IN LWP','Lakshadweep','RL',102.0),
    ('IN LAK','Lalakua','RQ',102.0),
    ('IN LGL','Lalgola Town','AA',102.0),
    ('IN LAL','Lalru','RL',102.0),
    ('IN YNT','Landt Cel Sezi/Bangalore North','AA',102.0),
    ('IN YNL','Landt Cel Sezii/Bangalore North','AA',102.0),
    ('IN LNG','Lapanga','RL',102.0),
    ('IN LTB','Latu Bazar','AA',102.0),
    ('IN LAT','Latur','RL',102.0),
    ('IN LKQ','Laukaha Lcs','AA',102.0),
    ('IN LPR','Leapuram','AA',102.0),
    ('IN IXL','Leh','AI',102.0),
    ('IN IXI','Lilabari','AI',102.0),
    ('IN GNL','LIPD SEZ/Navi Mumbai','AA',102.0),
    ('IN GNR','Lipl-ICD/Marripalem','RQ',102.0),
    ('IN KOY','Lkoyali','RL',102.0),
    ('IN LOH','Lohardaga','RL',102.0),
    ('IN CRX','Loksan Lcs','AA',102.0),
    ('IN LON','Loni','RL',102.0),
    ('IN LNI','Loni','RL',102.0),
    ('IN LKH','Loni Kalbhor','RL',102.0),
    ('IN NOI','Loni-1 LCD/Chaziabad','AF',102.0),
    ('IN RJN','LSPL SEZ/Rajnandgaon','AA',102.0),
    ('IN TLT','LTSL SEZ/Tiruvallur','AA',102.0),
    ('IN LKO','Lucknow','AA',102.0),
    ('IN LUH','Ludhiana','AA',102.0),
    ('IN MCC','Machhiwara','RL',102.0),
    ('IN MGJ','Madanganj','RL',102.0),
    ('IN KRM','MADCL SEZ/Nagpur','AA',102.0),
    ('IN MRG','Madgaon','AA',102.0),
    ('IN MSH','Madho Singhana','RL',102.0),
    ('IN MBS','Madhosingh/Allahabad','RL',102.0),
    -- ('IN','Madras = Chennai (ex Madras)',NULL,102.0),
    ('IN IXM','Madurai','AI',102.0),
    ('IN MDT','Maduranthakam','AA',102.0),
    ('IN MAG','Magadi','RQ',102.0),
    ('IN MDA','Magdalla','AA',102.0),
    ('IN HAD','Mahad','RL',102.0),
    ('IN MAJ','Maharajganj','RL',102.0),
    ('IN MHB','Mahbubnagar','RL',102.0),
    ('IN MAH','Mahe','AA',102.0),
    ('IN MGH','Mahendraganj','AA',102.0),
    ('IN MSA','Mahesana','RL',102.0),
    ('IN MHN','Mahisasan','AA',102.0),
    ('IN MHG','Mahurighat','AA',102.0),
    ('IN MHA','Mahuva','AA',102.0),
    ('IN MPI','Mainpuri','RL',102.0),
    ('IN MKN','Makrana','RL',102.0),
    ('IN MPR','Malanpur','AA',102.0),
    ('IN MRK','Malappuram','RQ',102.0),
    ('IN LDA','Malda','AI',102.0),
    ('IN MWA','Maliwada','RL',102.0),
    ('IN MLP','Mallipuram','AA',102.0),
    ('IN MAL','Malpe','AA',102.0),
    ('IN MLR','Malur','RL',102.0),
    ('IN MLW','Malwan','AA',102.0),
    ('IN MNI','Manali','AA',102.0),
    ('IN MNT','Manalithara','AA',102.0),
    ('IN MKK','Manapakkam','AA',102.0),
    ('IN MDP','Mandapam','AA',102.0),
    ('IN MNP','Mandideep','RL',102.0),
    ('IN MAN','Mandsaur','RL',102.0),
    ('IN MDV','Måndvi','AA',102.0),
    ('IN MNW','Mandwa','AA',102.0),
    ('IN IXE','Mangalore','AA',102.0),
    ('IN MAI','Mangalore','RL',102.0),
    ('IN MAQ','Mangalore SEZ','AA',102.0),
    ('IN MGR','Mangrol','AA',102.0),
    ('IN MKC','Manikarchar','AA',102.0),
    ('IN MNR','Manori','AA',102.0),
    ('IN MNS','Mansa','RL',102.0),
    ('IN MNU','Manu','AA',102.0),
    ('IN MRM','Marmagao (Marmugao)','AA',102.0),
    ('IN MRM','Marmugao (Marmagao)','AA',102.0),
    ('IN MLI','Maroli','AA',102.0),
    ('IN MAP','Masulipatnam','AA',102.0),
    ('IN MKM','Mathilakam','RL',102.0),
    ('IN MAT','Mathura','RQ',102.0),
    ('IN MAU','Mau','RL',102.0),
    ('IN MAV','Mavalli','AA',102.0),
    ('IN MYB','Mayabandar','AA',102.0),
    ('IN MYN','Mayurbhanj','RL',102.0),
    ('IN MDW','Meadows','AA',102.0),
    ('IN MED','Medinipur','RL',102.0),
    ('IN MER','Meerut','AA',102.0),
    ('IN MBZ','Metia Bruz','RL',102.0),
    ('IN MTT','Mettupalayam','RL',102.0),
    ('IN MTR','Mettur','RL',102.0),
    ('IN MTW','Metwad','AA',102.0),
    ('IN MCI','Minicoi I','AA',102.0),
    ('IN MRJ','Miraj','AA',102.0),
    ('IN MRI','Mithivirdi','RQ',102.0),
    ('IN YNA','Modern Asset Sezi/Yelahanka Hobli','AA',102.0),
    ('IN YMA','Modern Asset Sezii/Yelahanka Hobli','AA',102.0),
    ('IN MUZ','Modinagar Icd/Ghaziabad','AA',102.0),
    ('IN MOG','Moga','RL',102.0),
    ('IN MHI','Mohali','RL',102.0),
    ('IN MOH','Mohanbari','AI',102.0),
    ('IN MRA','Mora','AA',102.0),
    ('IN MOR','Moradabad','AA',102.0),
    ('IN MOB','Morbi','RL',102.0),
    ('IN MRE','Moreh','AA',102.0),
    ('IN MOE','Morena','RL',102.0),
    ('IN MAR','Morigaon','RL',102.0),
    ('IN ADM','Mrpl-SEZ/Ahmadabad','RQ',102.0),
    ('IN PMT','MTDCCL SEZ/Pune','AA',102.0),
    ('IN MHP','Muhammadpur','RL',102.0),
    ('IN MDK','Mul Dwårka','AA',102.0),
    ('IN MUL','Mulgund','AA',102.0),
    ('IN BAP','Multi Services-SEZ/Dronagiri','RQ',102.0),
    ('IN KLM','Multi Services-SEZ/Kalamboli','RQ',102.0),
    ('IN BAM','Multi Services-SEZ/Ulwe','RQ',102.0),
    ('IN MUU','Mulund','RQ',102.0),
    ('IN BOM','Mumbai (ex Bombay)','AA',102.0),
    ('IN MNB','Munabao','AA',102.0),
    ('IN MUN','Mundra','AA',102.0),
    ('IN AJM','Mundra Port SEZ','RQ',102.0),
    ('IN MUG','Munger','RL',102.0),
    ('IN MUR','Murad','RL',102.0),
    ('IN MZA','Muzaffarnagar','AI',102.0),
    ('IN MZU','Muzaffarpur','AI',102.0),
    ('IN CGA','MWCDL-Apparels-SEZ/Chengalpattu','RQ',102.0),
    ('IN CGL','MWCDL-Auto-Ancillaries-SEZ/Chengalpattu','RQ',102.0),
    ('IN CGI','MWCDL-IT-SEZ/Chengalpattu','RQ',102.0),
    ('IN MYR','Mylapore','RL',102.0),
    ('IN MYQ','Mysore','AI',102.0),
    ('IN NDD','Nadiad','RL',102.0),
    ('IN NGA','Nagaon','RL',102.0),
    ('IN NPT','Nagappattinam','AA',102.0),
    ('IN NPR','Nagapur','RL',102.0),
    ('IN NGK','Nagarkata Lcs','AA',102.0),
    ('IN NAU','Nagaur','RL',102.0),
    ('IN NGC','Nagercoil','RL',102.0),
    ('IN NAG','Nagpur','AA',102.0),
    ('IN NAT','Nainital','AA',102.0),
    ('IN NJD','Najibabad','RL',102.0),
    ('IN NAA','Nalagarh','AA',102.0),
    ('IN NAL','Nalbari','RL',102.0),
    ('IN TNN','Namakkal','RL',102.0),
    ('IN NKN','Namkhana','AA',102.0),
    ('IN NMK','Namkum','RL',102.0),
    ('IN NPG','Nampong','AA',102.0),
    ('IN NAN','Nancowrie','AA',102.0),
    ('IN DID','Nanded','RL',102.0),
    ('IN NDC','Nanded','AI',102.0),
    ('IN NDG','Nandgaon','AA',102.0),
    ('IN ISK','Nasik','AA',102.0),
    ('IN NVB','Navabunder','AA',102.0),
    ('IN NVP','Navaspur','AA',102.0),
    ('IN NMB','Navi Mumbai','RL',102.0),
    ('IN SAJ','NAVKAR ICD/Umbergaon','AA',102.0),
    ('IN NAV','Navlakhi','AA',102.0),
    ('IN QNW','Nawanshahar','RL',102.0),
    ('IN NYG','Nayagarh','RL',102.0),
    ('IN CNC','NCTL SEZ/Kancheepuram','AA',102.0),
    ('IN CJC','NCTL(ENGG) SEZ/Kancheepuram','AA',102.0),
    ('IN NMT','Neamari Stemerghat','AA',102.0),
    ('IN NER','Neemrana','RL',102.0),
    ('IN NEM','Neemuch','RL',102.0),
    ('IN NEL','Nellore','RL',102.0),
    ('IN NGR','Nepalgunj Road','AA',102.0),
    ('IN ICD','New Delhi','RL',102.0),
    ('IN NML','New Mangalore','AA',102.0),
    ('IN NTU','New Tuticorin','RL',102.0),
    ('IN NWP','Newapur','AA',102.0),
    ('IN NVY','Neyveli','AI',102.0),
    ('IN VLN','NG Realty-SEZ/Bavla','AF',102.0),
    ('IN NSA','Nhava Sheva (Jawaharlal Nehru)','AA',102.0),
    ('IN NHV','Nhave','RL',102.0),
    ('IN NID','Nidadavole','RL',102.0),
    ('IN NGI','Nilgiris','RL',102.0),
    ('IN NKR','Nilokheri','RQ',102.0),
    ('IN NEE','Nindakara','AA',102.0),
    ('IN CJN','Nipl-SEZ/Sriperumbudur','RQ',102.0),
    ('IN NVT','Nivti','AA',102.0),
    ('IN NIZ','Nizamabad','RL',102.0),
    ('IN NDA','Noida','AA',102.0),
    ('IN NSI','North Sikkim','RL',102.0),
    ('IN JNJ','NPLP SEZ/Thane','AA',102.0),
    ('IN NUA','Nuapada','RL',102.0),
    ('IN NUH','Nuh','RL',102.0),
    ('IN KUR','OIIDC SEZ/Khurda','RL',102.0),
    ('IN OKH','Okha','AA',102.0),
    ('IN RGB','Old Raghna Bazar','AA',102.0),
    ('IN ONG','Ongole','RL',102.0),
    ('IN ONJ','Onjal','AA',102.0),
    ('IN GAO','OPGS SEZ/Gandhidham','AF',102.0),
    ('IN HOI','OPTO INFRA SEZ/Hassan','AA',102.0),
    ('IN ORS','Orissa','RL',102.0),
    ('IN OMN','Osmanabad','AI',102.0),
    ('IN PDI','Padi','RQ',102.0),
    ('IN GJT','Padra','RL',102.0),
    ('IN PDD','Padubidri','AA',102.0),
    ('IN MBD','Pakwara (Moradabad)','AA',102.0),
    ('IN PAJ','Pal','RQ',102.0),
    ('IN PAD','Palakkad','RL',102.0),
    ('IN PAM','Palamu','RL',102.0),
    ('IN PKN','Palani','RL',102.0),
    ('IN PLS','Palasa','RL',102.0),
    ('IN PLD','Paldi','RL',102.0),
    ('IN PLJ','Palej','RL',102.0),
    ('IN PGR','Palghar','RL',102.0),
    ('IN PAL','Palghat','RL',102.0),
    ('IN PAI','Pali','RL',102.0),
    ('IN PSH','Palshet','AA',102.0),
    ('IN PWL','Palwal ICD','AA',102.0),
    ('IN PMB','Pamban','AA',102.0),
    ('IN PAN','Panaji Port','AA',102.0),
    ('IN PNM','Panambur, Va Mangalore','QQ',102.0),
    ('IN PNA','Panchkula','RL',102.0),
    ('IN 5PA','Paneli','RL',102.0),
    ('IN PNI','Panipat','RL',102.0),
    ('IN PAP','Panipat','RL',102.0),
    ('IN PNT','Panitankit (Nazalbari)','AA',102.0),
    ('IN PNJ','Panjim','AA',102.0),
    ('IN PAA','Panna','RL',102.0),
    ('IN NOL','Panoli','RL',102.0),
    ('IN PGH','Pantnagar','AI',102.0),
    ('IN PVL','Panvel','RL',102.0),
    ('IN PRT','Paradip Garh','AA',102.0),
    ('IN PPT','Paradip Port','RQ',102.0),
    ('IN PJT','Parantij','RL',102.0),
    ('IN PAR','Parbhani','RL',102.0),
    ('IN PWN','Parwanoo','RL',102.0),
    ('IN IXT','Pasighat','AI',102.0),
    ('IN PTU','Patancheru','RL',102.0),
    ('IN IXP','Pathankot','AI',102.0),
    ('IN PTQ','Patiala','RL',102.0),
    ('IN PTL','Patli','RQ',102.0),
    ('IN PAT','Patna','AA',102.0),
    ('IN PPG','Patparganj','AA',102.0),
    ('IN PAK','Payyannur','RL',102.0),
    ('IN PNL','PDPL SEZ/Raigarh','AA',102.0),
    ('IN PEE','Peenya','RL',102.0),
    ('IN PPJ','Pellet Plant Jetty/Shiroda','AA',102.0),
    ('IN PBR','Perambalur','RL',102.0),
    ('IN PLY','Periyapalayam','RL',102.0),
    ('IN PRM','Pernem','AA',102.0),
    ('IN PER','Perundurai','RQ',102.0),
    ('IN PTP','Petrapole Road','AA',102.0),
    ('IN TBM','Phpl-SEZ/Kancheepuram','RQ',102.0),
    ('IN PHB','Phulbari','AA',102.0),
    ('IN PHU','Phursungi','RL',102.0),
    ('IN COP','Picpl-SEZ/Kakinada','RQ',102.0),
    ('IN PLN','Pilani','RL',102.0),
    ('IN PIL','Pilibhit','RL',102.0),
    ('IN PMP','Pimpri','AA',102.0),
    ('IN PIN','Pindhara','AA',102.0),
    ('IN PAV','Pipavav (Victor) Port','AA',102.0),
    ('IN KJI','Pipraun Lcs','AA',102.0),
    ('IN PIR','Pithampur','AA',102.0),
    ('IN PNY','Pondicherry','AA',102.0),
    ('IN PNN','Ponnani','AA',102.0),
    ('IN PON','Ponneri','RL',102.0),
    ('IN PBD','Porbandar','AA',102.0),
    ('IN IXZ','Port Blair','AA',102.0),
    ('IN PID','Port Indai','QQ',102.0),
    ('IN PPV','Port Pipavav','RL',102.0),
    ('IN PRN','Portonovo','AA',102.0),
    ('IN PST','Positra','RL',102.0),
    ('IN PRK','Powarkheda ICD/Hoshangabad','AA',102.0),
    ('IN PKM','Prakasam','RL',102.0),
    ('IN PTJ','Prantij','RQ',102.0),
    ('IN BPQ','Pratapganj','RL',102.0),
    ('IN PTG','Pratapgarh','RL',102.0),
    ('IN BDB','Precious Cargo Customs Clearance Centre/Bandra','AF',102.0),
    ('IN DDL','PSWC ICD/Dhandari Kalan','AA',102.0),
    ('IN PUD','Puducherry','RL',102.0),
    ('IN PUK','Pudukkottai','RL',102.0),
    ('IN PUL','Pulicat','RL',102.0),
    ('IN PLV','Pulivendula','RL',102.0),
    ('IN PNQ','Pune','AA',102.0),
    ('IN PRG','Purangad','AA',102.0),
    ('IN PUR','Puri','RL',102.0),
    ('IN ERP','Puthuvypeen-SEZ/Ernakulam','RQ',102.0),
    ('IN PUT','Puttaparthi','AI',102.0),
    ('IN TEY','Puzhal','RL',102.0),
    ('IN BGQ','Quest-SEZ/Belgaum','RQ',102.0),
    ('IN QUI','Quilon','RL',102.0),
    ('IN QUT','Quthbullapur','AA',102.0),
    ('IN RPL','Raddipalam','AA',102.0),
    ('IN RDP','Radhikapur','AA',102.0),
    ('IN RBL','Rae Bareli','RL',102.0),
    ('IN RAR','Raichur','RL',102.0),
    ('IN RA7','Raigad','RL',102.0),
    ('IN RGJ','Raiganj Railway Station Lcs','AA',102.0),
    ('IN RGA','Raigarh','RL',102.0),
    ('IN RIG','Raigarh','RL',102.0),
    ('IN RRI','Raili','RL',102.0),
    ('IN RPR','Raipur','AA',102.0),
    ('IN RGP','Rairangpur','RL',102.0),
    ('IN RAI','Raisen','RL',102.0),
    ('IN RNN','Raj Nandgaon','RL',102.0),
    ('IN RJA','Rajahmundry','AI',102.0),
    ('IN RKG','Rajakkamangalam','AA',102.0),
    ('IN RAH','Rajgarh','RL',102.0),
    ('IN RIR','Rajgir','AA',102.0),
    ('IN RAJ','Rajkot','AI',102.0),
    ('IN RJI','Rajouri','AI',102.0),
    ('IN RJP','Rajpara/Navabunder','AA',102.0),
    ('IN RJR','Rajpuri','AA',102.0),
    ('IN RAD','Rajsamand','RL',102.0),
    ('IN RJU','Rajula','RL',102.0),
    ('IN RMD','Ramagundam','AI',102.0),
    ('IN RMP','Ramanathapuram','RL',102.0),
    ('IN RAB','Ramban','RL',102.0),
    ('IN RAM','Rameshwaram','AA',102.0),
    ('IN RAG','Ramgarh','RL',102.0),
    ('IN RAP','Rampur','RL',102.0),
    ('IN RMT','Ramtek','RL',102.0),
    ('IN RNG','Ranaghat','AA',102.0),
    ('IN RNM','Ranasthalam','RL',102.0),
    ('IN IXR','Ranchi','AI',102.0),
    ('IN RGT','Ranghat Bay','AA',102.0),
    ('IN RAN','Rania','RL',102.0),
    ('IN TN9','Ranipet','RL',102.0),
    ('IN RNR','Ranpar','AA',102.0),
    ('IN RTM','Ratlam','RQ',102.0),
    ('IN RTC','Ratnagiri','AA',102.0),
    ('IN RXL','Raxaul','AA',102.0),
    ('IN RAY','Rayapalayam','RQ',102.0),
    ('IN RED','Redi','AA',102.0),
    ('IN LPJ','Reliance SEZ/Jamnagar','RQ',102.0),
    ('IN RGN','Renigunta','RL',102.0),
    ('IN RKO','Renukoot','RL',102.0),
    ('IN RVD','Revdanda','AA',102.0),
    ('IN REW','Rewa','AI',102.0),
    ('IN REA','Rewari','AA',102.0),
    ('IN CRL','Rga Sez/Chikkankannelli','AA',102.0),
    ('IN JPI','Riico SEZ-I/Sitapura','AC',102.0),
    ('IN KOH','Rll-SEZ/Medak','RQ',102.0),
    ('IN RHA','Roha','RL',102.0),
    ('IN ROH','Rohtak','RL',102.0),
    ('IN ROO','Roorkee','RL',102.0),
    ('IN RRK','Rourkela','AI',102.0),
    ('IN RYP','Royapuram','RL',102.0),
    ('IN ROZ','Rozi','RL',102.0),
    ('IN AKR','RPCIPL SEZ/Visakhapatnam','RQ',102.0),
    ('IN MDR','RTPL SEZ/Madurai','AA',102.0),
    ('IN RUD','Rudrapur','RL',102.0),
    ('IN RPN','Rupnagar','RL',102.0),
    ('IN RUP','Rupsi','AI',102.0),
    ('IN RGU','Ryngku','AA',102.0),
    ('IN SBT','Sabarmati','RQ',102.0),
    ('IN SAB','Sabroom','AA',102.0),
    ('IN JKA','Sachana ICD/Viramgam','AA',102.0),
    ('IN SAC','Sachin (Surat)','AA',102.0),
    ('IN SGR','Sagar','RL',102.0),
    ('IN SRE','Saharanpur','AA',102.0),
    ('IN SHB','Sahibabad','RL',102.0),
    ('IN SWA','Sahnewal','RQ',102.0),
    ('IN SAL','Salaya','AA',102.0),
    ('IN SXV','Salem','AA',102.0),
    ('IN SLT','Salt Lake','AA',102.0),
    ('IN DWN','Samalkha ICD/Panipat','AA',102.0),
    ('IN SAM','Samalkot','RL',102.0),
    ('IN JSJ','Sambalpur','RL',102.0),
    ('IN SAA','Sanand','RQ',102.0),
    ('IN SAD','Sanathnagar','RL',102.0),
    ('IN HPI','Sandkhera ICD/Kashipur','AA',102.0),
    ('IN JPW','Sanganer','RL',102.0),
    ('IN SAG','Sangli','RL',102.0),
    ('IN SAN','Sangrur','RL',102.0),
    ('IN DBS','Santa-SEZ/Muppireddipally','AF',102.0),
    ('IN CAS','SAPL SEZ/Ganjam','RL',102.0),
    ('IN SCH','Sap-SEZ/Surat','RQ',102.0),
    ('IN SAR','Sardar','RQ',102.0),
    ('IN SRL','Saroli','RL',102.0),
    ('IN STA','Satara','RQ',102.0),
    ('IN STM','Satara','RL',102.0),
    ('IN STN','Satna','RQ',102.0),
    ('IN STP','Satpati','AA',102.0),
    ('IN STY','Satyavedu','RL',102.0),
    ('IN TSM','Sawai Madhopur','RL',102.0),
    ('IN MUC','SCPL SEZ/Mulund','AA',102.0),
    ('IN HBB','Sdpl Sez/Bangalore','AA',102.0),
    ('IN CBS','SE&C LTD-SEZ/Coimbatore','AA',102.0),
    ('IN BRS','SE&C-LTD-SEZ/Waghodia','AF',102.0),
    ('IN UND','Secunderabad','RL',102.0),
    ('IN SEH','Sehore','RL',102.0),
    ('IN SLU','Selu','RQ',102.0),
    ('IN SHW','Sendhwa','RL',102.0),
    ('IN SHH','Shahada','RL',102.0),
    ('IN SHA','Shahapur','RL',102.0),
    ('IN SHD','Shahdol','RL',102.0),
    ('IN SJN','Shahjahanpur','RL',102.0),
    ('IN SHJ','Shajapur','RL',102.0),
    ('IN SH2','Shamli','RL',102.0),
    ('IN HIR','SHB ICD/Surat','AA',102.0),
    ('IN SBZ','Shella Bazar','AA',102.0),
    ('IN SHE','Sheopur','RL',102.0),
    ('IN NTL','Sherathang Lcs','AA',102.0),
    ('IN SRI','Shertallai','RQ',102.0),
    ('IN SHL','Shillong','AI',102.0),
    ('IN SMK','Shimoga','RL',102.0),
    ('IN SHI','Shirola','RL',102.0),
    ('IN SHU','Shirur','RQ',102.0),
    ('IN SHV','Shivpuri','RL',102.0),
    ('IN SSE','Sholapur','AI',102.0),
    ('IN SHR','Sholinghur','RL',102.0),
    ('IN SHN','Shopian','RL',102.0),
    ('IN SWD','Shriwardhan','AA',102.0),
    ('IN SIB','Sibsagar','RL',102.0),
    ('IN HDD','Sidcul Icd/Pantnagar','AA',102.0),
    ('IN SAP','Siddapur','RL',102.0),
    ('IN SDD','Siddharthnagar','RL',102.0),
    ('IN SID','Sidhi','RL',102.0),
    ('IN SHO','Sihor','RL',102.0),
    ('IN SIK','Sika','AA',102.0),
    ('IN SKR','Sikar','RQ',102.0),
    ('IN SKK','Sikkim','RL',102.0),
    ('IN STF','Sikta Lcs','AA',102.0),
    ('IN IXS','Silchar','AI',102.0),
    ('IN SIL','Siliguri','RL',102.0),
    ('IN SIV','Silvassa','RL',102.0),
    ('IN SIM','Sima/Navabunder','AA',102.0),
    ('IN SHP','Simbhour Port','AA',102.0),
    ('IN SLV','Simla','AI',102.0),
    ('IN SMR','Simor','AA',102.0),
    ('IN SBH','Sinbhour','AA',102.0),
    ('IN SIN','Sindhudurg','RL',102.0),
    ('IN SIR','Singanallur','AA',102.0),
    ('IN SNG','Singhabad','AA',102.0),
    ('IN SLI','Singrauli','RL',102.0),
    ('IN NKI','Sinnar','RL',102.0),
    ('IN HSI','SIPC SEZ/Krishnagiri','AA',102.0),
    ('IN VLR','SIPC SEZ/Vellore','AA',102.0),
    ('IN TEN','Sipcot-Gangaikondan-SEZ/Tirunelveli','RQ',102.0),
    ('IN CJS','Sipcot-Hi-Tech-SEZ/Sriperumbudur','RQ',102.0),
    ('IN CJO','Sipcot-Hi-Tech-SEZ-Oragadam/Sriperumbudur','RQ',102.0),
    ('IN PYS','Sipcot-SEZ/Erode','RQ',102.0),
    ('IN CSP','SIPL SEZ/Kancheepuram','AA',102.0),
    ('IN PSI','SIPL SEZ/Pune','AA',102.0),
    ('IN SIO','Sirohi','RL',102.0),
    ('IN SPR','Sirpur','RQ',102.0),
    ('IN STI','Sitai','AA',102.0),
    ('IN SIT','Sitapur','RL',102.0),
    ('IN STG','Sitarganj','RL',102.0),
    ('IN SVK','Sivakasi','RL',102.0),
    ('IN PVS','Snpip Sez/Tambaram','AA',102.0),
    ('IN SKA','Sokhana','AA',102.0),
    ('IN QSL','Solan','RQ',102.0),
    ('IN SOL','Solapur','RL',102.0),
    ('IN SNB','Sonabarsa','AA',102.0),
    ('IN SNL','Sonauli','AA',102.0),
    ('IN SUB','Sonepur','RL',102.0),
    ('IN SON','Sonipat','RL',102.0),
    ('IN SSI','South Sikkim','RL',102.0),
    ('IN TBP','SPIPL SEZ/Perungalathur','AA',102.0),
    ('IN AIR','SPPL SEZ/Thane','AA',102.0),
    ('IN GNS','Srehpl-SEZ/Gandhinagar','RQ',102.0),
    ('IN TAS','Sri City Pvt Ltd-SEZ/Satyavedu','AF',102.0),
    ('IN MUK','Sri Muktsar Sahib','RL',102.0),
    ('IN SMP','Srimantapur','AA',102.0),
    ('IN SXR','Srinagar','AA',102.0),
    ('IN SRP','Sriperumbudur','RL',102.0),
    ('IN TNS','SSL SEZ/Tuticorin','AA',102.0),
    ('IN SKN','St Kabir Nagar','RL',102.0),
    ('IN KNM','Startrack','RL',102.0),
    ('IN BHS','Sterling-SEZ/Bharuch','RQ',102.0),
    ('IN STT','Sttpl Cfs/Dadri','RQ',102.0),
    ('IN SKP','Sukhia Pokhari','AA',102.0),
    ('IN SUM','Sunam','RL',102.0),
    ('IN SUN','Sundargarh','RL',102.0),
    ('IN SJP','Surajpur','RL',102.0),
    ('IN SRV','Surasani-Yanam','AA',102.0),
    ('IN STV','Surat','AI',102.0),
    ('IN STR','Sutarkandi','AA',102.0),
    ('IN CSV','SVPL SEZ/Coimbatore','AA',102.0),
    ('IN PNS','SVRL SEZ/Raigad','AA',102.0),
    ('IN UDI','Synefra-SEZ/Udupi','AA',102.0),
    ('IN TTS','T.T.Shed','AA',102.0),
    ('IN TAD','Tadri','AA',102.0),
    ('IN TJA','Talaja','AA',102.0),
    ('IN TGD','Talegaon Dabhade','RQ',102.0),
    ('IN TLG','Talegoan','RQ',102.0),
    ('IN TLB','Taliparamba','RQ',102.0),
    ('IN TPN','Talpona','AA',102.0),
    ('IN TAL','Talwara','RL',102.0),
    ('IN TAM','Tamilnada','RQ',102.0),
    ('IN TNK','Tankari','AA',102.0),
    ('IN TRP','Tarapur','AA',102.0),
    ('IN TT8','Tarn Taran','RL',102.0),
    ('IN CAG','Tata Steel SEZ/Ganjam','AA',102.0),
    ('IN INT','TCS SEZ/Indore','AF',102.0),
    ('IN TBT','TCSL SEZ/Siruseri','AA',102.0),
    ('IN GNT','TCS-SEZ/Gandhinagar','RQ',102.0),
    ('IN CBT','TDPL SEZ/Coimbatore','AA',102.0),
    ('IN TEL','Tellicherry','AA',102.0),
    ('IN TKS','Tenkasi','RQ',102.0),
    ('IN TEZ','Tezpur','AI',102.0),
    ('IN TEI','Tezu','AI',102.0),
    ('IN THL','Thal','AA',102.0),
    ('IN TNA','Thana','AA',102.0),
    ('IN THN','Thane','RL',102.0),
    ('IN TJV','Thanjavur','AI',102.0),
    ('IN THE','Theni','RQ',102.0),
    ('IN TRV','Thiruvananthapuram (ex Trivandrum)','AI',102.0),
    ('IN TVR','Thiruvarur','RL',102.0),
    ('IN NTV','Thootibari Lcs','AA',102.0),
    ('IN TPP','Thoppumpady','RQ',102.0),
    ('IN TPH','Thopputhurai','AA',102.0),
    ('IN THR','Thrissur','RL',102.0),
    ('IN TCR','Tics ICD/Mathilakam','RL',102.0),
    ('IN TIK','Tikamgarh','RL',102.0),
    ('IN TKN','Tikonia','AA',102.0),
    ('IN TSK','Tinsukia','RL',102.0),
    ('IN MAS','TIPL SEZ/Chennai','AA',102.0),
    ('IN TCH','Tiruchengodu','RL',102.0),
    ('IN TRZ','Tiruchirapalli','AA',102.0),
    ('IN TRI','Tiruchirappalli','RL',102.0),
    ('IN TYR','Tirukkadayyur','AA',102.0),
    ('IN TIR','Tirupati','AI',102.0),
    ('IN TUP','Tiruppur','AA',102.0),
    ('IN TRU','Tirur','RL',102.0),
    ('IN TRL','Tiruvallur','RL',102.0),
    ('IN TVI','Tiruvannamalai','RQ',102.0),
    ('IN TIV','Tiviri','QQ',102.0),
    ('IN TND','Tondi','AA',102.0),
    ('IN TVT','Tondiarpet','RL',102.0),
    ('IN KTK','Toranagallu','RL',102.0),
    ('IN TRA','Tranquebar','RL',102.0),
    ('IN TMP','Trombay','AA',102.0),
    ('IN TTP','Ttpl Cfs/Dadri','RQ',102.0),
    ('IN TDE','Tudiyalür','RN',102.0),
    ('IN TKD','Tughlakabad','AA',102.0),
    ('IN TUB','TUMB','AA',102.0),
    ('IN ZUM','Tumkur','RL',102.0),
    ('IN TUN','Tuna','AA',102.0),
    ('IN TNG','Tungi','AA',102.0),
    ('IN TUT','Tuticorin','AA',102.0),
    ('IN UDR','Udaipur','AA',102.0),
    ('IN UDH','Udhampur','RL',102.0),
    ('IN UJJ','Ujjain','RL',102.0),
    ('IN ULP','Ultapani','AA',102.0),
    ('IN ULW','Ulwa','AA',102.0),
    ('IN UMA','Umaria','RL',102.0),
    ('IN UMR','Umarsadi','AA',102.0),
    ('IN UMG','Umbergaon','RQ',102.0),
    ('IN UMB','Umbergoan','AA',102.0),
    ('IN UNA','Una','RQ',102.0),
    ('IN URA','Uran','RL',102.0),
    ('IN UTN','Uttan','AA',102.0),
    ('IN VRU','Vadarevu','AA',102.0),
    ('IN VAD','Vadinar','AA',102.0),
    ('IN BDQ','Vadodara','AI',102.0),
    ('IN VVK','Valasaravakkam','RL',102.0),
    ('IN VKM','Valinokkam','AA',102.0),
    ('IN ERV','Vallarpadom-SEZ/Ernakulam','RQ',102.0),
    ('IN VSD','Valsad','RL',102.0),
    ('IN VAL','Valvada','RQ',102.0),
    ('IN VSI','Vansi-Borsi','AA',102.0),
    ('IN VPI','Vapi','AA',102.0),
    ('IN VNS','Varanasi','AA',102.0),
    ('IN VRD','Varavda','AA',102.0),
    ('IN VSV','Varsova','AA',102.0),
    ('IN VGM','Vasco da Gama','RL',102.0),
    ('IN VZJ','Vazhinjam','AA',102.0),
    ('IN MOV','VBTL-SEZ/Medak','RQ',102.0),
    ('IN JHV','Vedanta SEZ/Jharsuguda','AA',102.0),
    ('IN VNG','Vemgira','AA',102.0),
    ('IN VEN','Vengurla','RL',102.0),
    ('IN VEP','Veppalodai','AA',102.0),
    ('IN VVA','Veraval','AA',102.0),
    ('IN VER','Verna','RQ',102.0),
    ('IN VHA','Vidisha','RL',102.0),
    ('IN VID','Vidyanagar','RL',102.0),
    ('IN VIA','Vijapur','RL',102.0),
    ('IN VIJ','Vijayanagar','RL',102.0),
    ('IN VGA','Vijayawada','AI',102.0),
    ('IN GWM','Vijayawada International Airport/Gannavaram','AA',102.0),
    ('IN VYD','Vijaydurg','AA',102.0),
    ('IN NGS','Village Namaya Shipkila','AA',102.0),
    ('IN VIL','Viluppuram','RL',102.0),
    ('IN VGH','Virudhunagar','RL',102.0),
    ('IN VTZ','Visakhapatnam','AA',102.0),
    ('IN VSG','Visnagar','RL',102.0),
    ('IN VIZ','Vizag','XX',102.0),
    ('IN VIG','Vizagapatanam','RQ',102.0),
    ('IN CJV','VTPL SEZ/Kancheepuram','AA',102.0),
    ('IN TEV','VVM SEZ/Tirunelveli','AA',102.0),
    ('IN WAD','Wada','RL',102.0),
    ('IN WAI','Wai','RQ',102.0),
    ('IN WAL','Waluj (Aurangabad)','AA',102.0),
    ('IN WRA','Warangal','RL',102.0),
    ('IN WAR','Warora','RL',102.0),
    ('IN WGC','Warrangal','AI',102.0),
    ('IN WAS','Washim','RL',102.0),
    ('IN AJE','Welspun Anjar-SEZ/Anjar','RQ',102.0),
    ('IN WSS','West Sikkim','RL',102.0),
    ('IN KVR','WFPML-SEZ/Kovvur','RQ',102.0),
    ('IN CCI','Wipro Sez/Hinjewadi','AA',102.0),
    ('IN KJW','Wipro Sez/Kodathi','AA',102.0),
    ('IN BNW','Wipro SEZ/Kolkata','AF',102.0),
    ('IN VSP','Wipro Sez/Resapuvanipalem','AA',102.0),
    ('IN CHJ','WWIL ICD/Wardha','RL',102.0),
    ('IN YAN','Yanam','RL',102.0),
    ('IN YVT','Yavatamal','RL',102.0),
    ('IN YAV','Yavatmal','RL',102.0),
    ('IN YCD','Yercaud','RL',102.0),
    ('IN ZER','Zero (Ziro)','RL',102.0),
    ('IN ZIP','ZIPL-SEZ/Ahmedabad','RQ',102.0),
    ('IN ZIR','Zirakpur','RL',102.0);

    -- user
    create table User (
    id bigint auto_increment,
    name  varchar(120) not null,
    mobile  varchar(10) not null,
    email  varchar(320) not null,
    password  varchar(320) not null,
    image  varchar(200) null,
    isAdmin boolean default false,
    isPartner boolean default false,
    isHidden boolean default false,
    created datetime default current_timestamp,
    updated datetime default current_timestamp on update current_timestamp,
    primary key (id),
    unique key (email)
    );

    -- address
    create table Address (
    id bigint auto_increment,
    name varchar(120) not null,
    building varchar(120) not null, 
    landmark varchar(320) not null,
    street varchar(120) not null,
    pincode int not null,
    stateId int not null,
    userId bigint not null,
    isHidden boolean default false,
    created datetime default current_timestamp,
    updated datetime default current_timestamp on update current_timestamp,
    index stateIndex (id),
    foreign key (stateId)
        references State(id)
        on delete cascade,
    foreign key (userId)
        references User(id)
        on delete cascade,    
    primary key (id) );

    -- Device

    create table Device (
        id bigint auto_increment,
        uuid  bigint not null,
        model varchar(120) not null, 
        platform varchar(120) not null,
        fingerprint varchar(320) not null,
        isHidden boolean default false,
        created datetime default current_timestamp,
        updated datetime default current_timestamp on update current_timestamp,
        primary key (id) 
    );

    -- UserDevice

    create table UserDevice (
        id bigint auto_increment,
        userId  bigint not null,
        deviceId  bigint not null,
        isHidden boolean default false,
        created datetime default current_timestamp,
        updated datetime default current_timestamp on update current_timestamp,
        index deviceIndex (userId, deviceId),
        foreign key (deviceId)
            references Device(id)
            on delete cascade,
        foreign key (userId)
            references User(id)
            on delete cascade,
        primary key (id)
    );

    -- Currency
    create table Currency (
		id int auto_increment,
		name varchar(120) not null,
		alpha2code varchar(4) not null,
		symbol varchar(2) not null,
		isHidden boolean default false,
		created datetime default current_timestamp,
		updated datetime default current_timestamp on update current_timestamp,
		primary key (id) 
    );
    
    -- Category
	create table Category (
		id int auto_increment,
		name varchar(120) not null,
		isHidden boolean default false,
		created datetime default current_timestamp,
		updated datetime default current_timestamp on update current_timestamp,
		primary key (id)
    );
    
    -- MediaType
	create table MediaType (
		id int auto_increment,
		name varchar(120) not null,
		isHidden boolean default false,
		created datetime default current_timestamp,
		updated datetime default current_timestamp on update current_timestamp,
		primary key (id)
    );

    -- Industry
    create table Industry (
		id int auto_increment,
		name varchar(120) not null,
		isHidden boolean default false,
		created datetime default current_timestamp,
		updated datetime default current_timestamp on update current_timestamp,
		primary key (id)
    );

    -- Type
	create table Type (
		id int auto_increment,
		name varchar(120) not null,
		isHidden boolean default false,
		created datetime default current_timestamp,
		updated datetime default current_timestamp on update current_timestamp,
		primary key (id)
    );

    -- Banner
    create table Banner (
        id bigint auto_increment,
        name  varchar(200) not null,
        description  varchar(400) not null,
        image  varchar(200) not null,
        addressId bigint not null,
        latitude decimal(10,8) default 0,
        longitude decimal(11,8) default 0,
        industryId int not null,
        categoryId int not null,
        mediaTypeId int not null,
        ainNumber int not null,
        facingFrom varchar(300) not null,
        towardsTo varchar(300) not null,
        size varchar(20) not null,
        sft int not null,
        isLightning boolean default false,
        isDigital boolean default false,
        price decimal(13,2) default 0,
        currencyId int not null,
        bookingStartDate datetime default current_timestamp,
        bookingEndDate datetime default current_timestamp,
        activeStartDate datetime default current_timestamp,
        activeEndDate datetime default current_timestamp,
        isHidden boolean default false,
        created datetime default current_timestamp,
        updated datetime default current_timestamp on update current_timestamp,
        index bannerIndex (addressId, industryId, categoryId, mediaTypeId, currencyId),
        foreign key (addressId)
            references Address(id)
            on delete cascade,
        foreign key (industryId)
            references Industry(id)
            on delete cascade,
        foreign key (categoryId)
            references Category(id)
            on delete cascade,
        foreign key (mediaTypeId)
            references MediaType(id)
            on delete cascade,
        foreign key (currencyId)
            references Currency(id)
            on delete cascade,
        primary key (id)
    );

    -- Company

    create table Company (
        id bigint auto_increment,
        name varchar(120) not null,
        description  varchar(400) not null,
        image  varchar(200) not null,
        isParentCompany boolean default false,
        addressId bigint not null,
        latitude decimal(10,8) default 0,
        longitude decimal(11,8) default 0,
        industryId int not null,
        gst varchar(16) not null,
        angellist varchar(200) null,
        discord varchar(200) null,
        facebook varchar(200) null,
        github varchar(200) null,
        google varchar(200) null,
        instagram varchar(200) null,
        justdial varchar(200) null,
        linkedin varchar(200) null,
        pinterest varchar(200) null,
        slack varchar(200) null,
        tiktok varchar(200) null,
        twitter varchar(200) null,
        web varchar(200) null,
        youtube varchar(200) null,
        isActive boolean default false,
        isHidden boolean default false,
        created datetime default current_timestamp,
        updated datetime default current_timestamp on update current_timestamp,
        index companyIndex (id, addressId, industryId),
        foreign key (addressId)
            references Address(id)
            on delete cascade,
        foreign key (industryId)
            references Industry(id)
            on delete cascade,
        primary key (id) 
    );

    -- UserCompany
    create table UserCompany (
		id bigint auto_increment,
		companyId bigint not null,
		userId bigint not null,
		isOwner boolean default false,
        isMarketer boolean default false,
		isHidden boolean default false,
		created datetime default current_timestamp,
		updated datetime default current_timestamp on update current_timestamp,
		index userCompanyIndex (id, companyId, userId),
		foreign key (companyId)
			references Company(id)
			on delete cascade,
		foreign key (userId)
			references User(id)
			on delete cascade,
		primary key (id)
    );

    -- Tags
    create table Tags (
		id int auto_increment,
		name varchar(120) not null,
		isHidden boolean default false,
		created datetime default current_timestamp,
		updated datetime default current_timestamp on update current_timestamp,
		primary key (id)
    );

    -- Campaign
    create table Campaign (
		id bigint auto_increment,
		name varchar(140) not null,
		description varchar(400) not null,
		isHidden boolean default false,
		created datetime default current_timestamp,
		updated datetime default current_timestamp on update current_timestamp,
		primary key (id)
    );

    -- CampaignTags
    create table CampaignTags (
		id bigint auto_increment,
		campaignId bigint not null,
		tagsId int not null,
        isHidden boolean default false,
		created datetime default current_timestamp,
		updated datetime default current_timestamp on update current_timestamp,
		index campaignTagsIndex (id, campaignId, tagsId),
		foreign key (campaignId)
			references Campaign(id)
			on delete cascade,
		foreign key (tagsId)
			references Tags(id)
			on delete cascade,
		primary key (id)
    );

    -- OrderHistory
	create table OrderHistory (
		id bigint auto_increment,
        total decimal(13,2) default 0,
		status varchar(80) default null,
        fromDate datetime default current_timestamp,
        toDate datetime default current_timestamp,
		userId bigint not null,
		bannerId bigint not null,
        isHidden boolean default false,
		created datetime default current_timestamp,
		updated datetime default current_timestamp on update current_timestamp,
		index orderHistoryIndex (id, bannerId, userId),
		foreign key (bannerId)
			references Banner(id)
			on delete cascade,
		foreign key (userId)
			references User(id)
			on delete cascade,
		primary key (id)
    );

insert into apna_ad.User(name, mobile, email, password, image, isAdmin, isPartner) value ('Aditya Kumar', '9871552963', 'adityakumarverma1993@gmail.com', 'Adity@03','', 1, 1);

/* INSERT QUERY NO: 1 */
INSERT INTO Industry(name)
VALUES
(
'Accounting'
);

/* INSERT QUERY NO: 2 */
INSERT INTO Industry(name)
VALUES
(
'Airlines/Aviation'
);

/* INSERT QUERY NO: 3 */
INSERT INTO Industry(name)
VALUES
(
'Alternative Dispute Resolution'
);

/* INSERT QUERY NO: 4 */
INSERT INTO Industry(name)
VALUES
(
'Alternative Medicine'
);

/* INSERT QUERY NO: 5 */
INSERT INTO Industry(name)
VALUES
(
'Animation'
);

/* INSERT QUERY NO: 6 */
INSERT INTO Industry(name)
VALUES
(
'Apparel & Fashion'
);

/* INSERT QUERY NO: 7 */
INSERT INTO Industry(name)
VALUES
(
'Architecture & Planning'
);

/* INSERT QUERY NO: 8 */
INSERT INTO Industry(name)
VALUES
(
'Arts and Crafts'
);

/* INSERT QUERY NO: 9 */
INSERT INTO Industry(name)
VALUES
(
'Automotive'
);

/* INSERT QUERY NO: 10 */
INSERT INTO Industry(name)
VALUES
(
'Aviation & Aerospace'
);

/* INSERT QUERY NO: 11 */
INSERT INTO Industry(name)
VALUES
(
'Banking'
);

/* INSERT QUERY NO: 12 */
INSERT INTO Industry(name)
VALUES
(
'Biotechnology'
);

/* INSERT QUERY NO: 13 */
INSERT INTO Industry(name)
VALUES
(
'Broadcast Media'
);

/* INSERT QUERY NO: 14 */
INSERT INTO Industry(name)
VALUES
(
'Building Materials'
);

/* INSERT QUERY NO: 15 */
INSERT INTO Industry(name)
VALUES
(
'Business Supplies and Equipment'
);

/* INSERT QUERY NO: 16 */
INSERT INTO Industry(name)
VALUES
(
'Capital Markets'
);

/* INSERT QUERY NO: 17 */
INSERT INTO Industry(name)
VALUES
(
'Chemicals'
);

/* INSERT QUERY NO: 18 */
INSERT INTO Industry(name)
VALUES
(
'Civic & Social Organization'
);

/* INSERT QUERY NO: 19 */
INSERT INTO Industry(name)
VALUES
(
'Civil Engineering'
);

/* INSERT QUERY NO: 20 */
INSERT INTO Industry(name)
VALUES
(
'Commercial Real Estate'
);

/* INSERT QUERY NO: 21 */
INSERT INTO Industry(name)
VALUES
(
'Computer & Network Security'
);

/* INSERT QUERY NO: 22 */
INSERT INTO Industry(name)
VALUES
(
'Computer Games'
);

/* INSERT QUERY NO: 23 */
INSERT INTO Industry(name)
VALUES
(
'Computer Hardware'
);

/* INSERT QUERY NO: 24 */
INSERT INTO Industry(name)
VALUES
(
'Computer Networking'
);

/* INSERT QUERY NO: 25 */
INSERT INTO Industry(name)
VALUES
(
'Computer Software'
);

/* INSERT QUERY NO: 26 */
INSERT INTO Industry(name)
VALUES
(
'Construction'
);

/* INSERT QUERY NO: 27 */
INSERT INTO Industry(name)
VALUES
(
'Consumer Electronics'
);

/* INSERT QUERY NO: 28 */
INSERT INTO Industry(name)
VALUES
(
'Consumer Goods'
);

/* INSERT QUERY NO: 29 */
INSERT INTO Industry(name)
VALUES
(
'Consumer Services'
);

/* INSERT QUERY NO: 30 */
INSERT INTO Industry(name)
VALUES
(
'Cosmetics'
);

/* INSERT QUERY NO: 31 */
INSERT INTO Industry(name)
VALUES
(
'Dairy'
);

/* INSERT QUERY NO: 32 */
INSERT INTO Industry(name)
VALUES
(
'Defense & Space'
);

/* INSERT QUERY NO: 33 */
INSERT INTO Industry(name)
VALUES
(
'Design'
);

/* INSERT QUERY NO: 34 */
INSERT INTO Industry(name)
VALUES
(
'Education Management'
);

/* INSERT QUERY NO: 35 */
INSERT INTO Industry(name)
VALUES
(
'E-Learning'
);

/* INSERT QUERY NO: 36 */
INSERT INTO Industry(name)
VALUES
(
'Electrical/Electronic Manufacturing'
);

/* INSERT QUERY NO: 37 */
INSERT INTO Industry(name)
VALUES
(
'Entertainment'
);

/* INSERT QUERY NO: 38 */
INSERT INTO Industry(name)
VALUES
(
'Environmental Services'
);

/* INSERT QUERY NO: 39 */
INSERT INTO Industry(name)
VALUES
(
'Events Services'
);

/* INSERT QUERY NO: 40 */
INSERT INTO Industry(name)
VALUES
(
'Executive Office'
);

/* INSERT QUERY NO: 41 */
INSERT INTO Industry(name)
VALUES
(
'Facilities Services'
);

/* INSERT QUERY NO: 42 */
INSERT INTO Industry(name)
VALUES
(
'Farming'
);

/* INSERT QUERY NO: 43 */
INSERT INTO Industry(name)
VALUES
(
'Financial Services'
);

/* INSERT QUERY NO: 44 */
INSERT INTO Industry(name)
VALUES
(
'Fine Art'
);

/* INSERT QUERY NO: 45 */
INSERT INTO Industry(name)
VALUES
(
'Fishery'
);

/* INSERT QUERY NO: 46 */
INSERT INTO Industry(name)
VALUES
(
'Food & Beverages'
);

/* INSERT QUERY NO: 47 */
INSERT INTO Industry(name)
VALUES
(
'Food Production'
);

/* INSERT QUERY NO: 48 */
INSERT INTO Industry(name)
VALUES
(
'Fund-Raising'
);

/* INSERT QUERY NO: 49 */
INSERT INTO Industry(name)
VALUES
(
'Furniture'
);

/* INSERT QUERY NO: 50 */
INSERT INTO Industry(name)
VALUES
(
'Gambling & Casinos'
);

/* INSERT QUERY NO: 51 */
INSERT INTO Industry(name)
VALUES
(
'"Glass'
);

/* INSERT QUERY NO: 52 */
INSERT INTO Industry(name)
VALUES
(
'Government Administration'
);

/* INSERT QUERY NO: 53 */
INSERT INTO Industry(name)
VALUES
(
'Government Relations'
);

/* INSERT QUERY NO: 54 */
INSERT INTO Industry(name)
VALUES
(
'Graphic Design'
);

/* INSERT QUERY NO: 55 */
INSERT INTO Industry(name)
VALUES
(
'"Health'
);

/* INSERT QUERY NO: 56 */
INSERT INTO Industry(name)
VALUES
(
'Higher Education'
);

/* INSERT QUERY NO: 57 */
INSERT INTO Industry(name)
VALUES
(
'Hospital & Health Care'
);

/* INSERT QUERY NO: 58 */
INSERT INTO Industry(name)
VALUES
(
'Hospitality'
);

/* INSERT QUERY NO: 59 */
INSERT INTO Industry(name)
VALUES
(
'Human Resources'
);

/* INSERT QUERY NO: 60 */
INSERT INTO Industry(name)
VALUES
(
'Import and Export'
);

/* INSERT QUERY NO: 61 */
INSERT INTO Industry(name)
VALUES
(
'Individual & Family Services'
);

/* INSERT QUERY NO: 62 */
INSERT INTO Industry(name)
VALUES
(
'Industrial Automation'
);

/* INSERT QUERY NO: 63 */
INSERT INTO Industry(name)
VALUES
(
'Information Services'
);

/* INSERT QUERY NO: 64 */
INSERT INTO Industry(name)
VALUES
(
'Information Technology and Services'
);

/* INSERT QUERY NO: 65 */
INSERT INTO Industry(name)
VALUES
(
'Insurance'
);

/* INSERT QUERY NO: 66 */
INSERT INTO Industry(name)
VALUES
(
'International Affairs'
);

/* INSERT QUERY NO: 67 */
INSERT INTO Industry(name)
VALUES
(
'International Trade and Development'
);

/* INSERT QUERY NO: 68 */
INSERT INTO Industry(name)
VALUES
(
'Internet'
);

/* INSERT QUERY NO: 69 */
INSERT INTO Industry(name)
VALUES
(
'Investment Banking'
);

/* INSERT QUERY NO: 70 */
INSERT INTO Industry(name)
VALUES
(
'Investment Management'
);

/* INSERT QUERY NO: 71 */
INSERT INTO Industry(name)
VALUES
(
'Judiciary'
);

/* INSERT QUERY NO: 72 */
INSERT INTO Industry(name)
VALUES
(
'Law Enforcement'
);

/* INSERT QUERY NO: 73 */
INSERT INTO Industry(name)
VALUES
(
'Law Practice'
);

/* INSERT QUERY NO: 74 */
INSERT INTO Industry(name)
VALUES
(
'Legal Services'
);

/* INSERT QUERY NO: 75 */
INSERT INTO Industry(name)
VALUES
(
'Legislative Office'
);

/* INSERT QUERY NO: 76 */
INSERT INTO Industry(name)
VALUES
(
'"Leisure'
);

/* INSERT QUERY NO: 77 */
INSERT INTO Industry(name)
VALUES
(
'Libraries'
);

/* INSERT QUERY NO: 78 */
INSERT INTO Industry(name)
VALUES
(
'Logistics and Supply Chain'
);

/* INSERT QUERY NO: 79 */
INSERT INTO Industry(name)
VALUES
(
'Luxury Goods & Jewelry'
);

/* INSERT QUERY NO: 80 */
INSERT INTO Industry(name)
VALUES
(
'Machinery'
);

/* INSERT QUERY NO: 81 */
INSERT INTO Industry(name)
VALUES
(
'Management Consulting'
);

/* INSERT QUERY NO: 82 */
INSERT INTO Industry(name)
VALUES
(
'Maritime'
);

/* INSERT QUERY NO: 83 */
INSERT INTO Industry(name)
VALUES
(
'Market Research'
);

/* INSERT QUERY NO: 84 */
INSERT INTO Industry(name)
VALUES
(
'Marketing and Advertising'
);

/* INSERT QUERY NO: 85 */
INSERT INTO Industry(name)
VALUES
(
'Mechanical or Industrial Engineering'
);

/* INSERT QUERY NO: 86 */
INSERT INTO Industry(name)
VALUES
(
'Media Production'
);

/* INSERT QUERY NO: 87 */
INSERT INTO Industry(name)
VALUES
(
'Medical Devices'
);

/* INSERT QUERY NO: 88 */
INSERT INTO Industry(name)
VALUES
(
'Medical Practice'
);

/* INSERT QUERY NO: 89 */
INSERT INTO Industry(name)
VALUES
(
'Mental Health Care'
);

/* INSERT QUERY NO: 90 */
INSERT INTO Industry(name)
VALUES
(
'Military'
);

/* INSERT QUERY NO: 91 */
INSERT INTO Industry(name)
VALUES
(
'Mining & Metals'
);

/* INSERT QUERY NO: 92 */
INSERT INTO Industry(name)
VALUES
(
'Motion Pictures and Film'
);

/* INSERT QUERY NO: 93 */
INSERT INTO Industry(name)
VALUES
(
'Museums and Institutions'
);

/* INSERT QUERY NO: 94 */
INSERT INTO Industry(name)
VALUES
(
'Music'
);

/* INSERT QUERY NO: 95 */
INSERT INTO Industry(name)
VALUES
(
'Nanotechnology'
);

/* INSERT QUERY NO: 96 */
INSERT INTO Industry(name)
VALUES
(
'Newspapers'
);

/* INSERT QUERY NO: 97 */
INSERT INTO Industry(name)
VALUES
(
'Non-Profit Organization Management'
);

/* INSERT QUERY NO: 98 */
INSERT INTO Industry(name)
VALUES
(
'Oil & Energy'
);

/* INSERT QUERY NO: 99 */
INSERT INTO Industry(name)
VALUES
(
'Online Media'
);

/* INSERT QUERY NO: 100 */
INSERT INTO Industry(name)
VALUES
(
'Outsourcing/Offshoring'
);

/* INSERT QUERY NO: 101 */
INSERT INTO Industry(name)
VALUES
(
'Package/Freight Delivery'
);

/* INSERT QUERY NO: 102 */
INSERT INTO Industry(name)
VALUES
(
'Packaging and Containers'
);

/* INSERT QUERY NO: 103 */
INSERT INTO Industry(name)
VALUES
(
'Paper & Forest Products'
);

/* INSERT QUERY NO: 104 */
INSERT INTO Industry(name)
VALUES
(
'Performing Arts'
);

/* INSERT QUERY NO: 105 */
INSERT INTO Industry(name)
VALUES
(
'Pharmaceuticals'
);

/* INSERT QUERY NO: 106 */
INSERT INTO Industry(name)
VALUES
(
'Philanthropy'
);

/* INSERT QUERY NO: 107 */
INSERT INTO Industry(name)
VALUES
(
'Photography'
);

/* INSERT QUERY NO: 108 */
INSERT INTO Industry(name)
VALUES
(
'Plastics'
);

/* INSERT QUERY NO: 109 */
INSERT INTO Industry(name)
VALUES
(
'Political Organization'
);

/* INSERT QUERY NO: 110 */
INSERT INTO Industry(name)
VALUES
(
'Primary/Secondary Education'
);

/* INSERT QUERY NO: 111 */
INSERT INTO Industry(name)
VALUES
(
'Printing'
);

/* INSERT QUERY NO: 112 */
INSERT INTO Industry(name)
VALUES
(
'Professional Training & Coaching'
);

/* INSERT QUERY NO: 113 */
INSERT INTO Industry(name)
VALUES
(
'Program Development'
);

/* INSERT QUERY NO: 114 */
INSERT INTO Industry(name)
VALUES
(
'Public Policy'
);

/* INSERT QUERY NO: 115 */
INSERT INTO Industry(name)
VALUES
(
'Public Relations and Communications'
);

/* INSERT QUERY NO: 116 */
INSERT INTO Industry(name)
VALUES
(
'Public Safety'
);

/* INSERT QUERY NO: 117 */
INSERT INTO Industry(name)
VALUES
(
'Publishing'
);

/* INSERT QUERY NO: 118 */
INSERT INTO Industry(name)
VALUES
(
'Railroad Manufacture'
);

/* INSERT QUERY NO: 119 */
INSERT INTO Industry(name)
VALUES
(
'Ranching'
);

/* INSERT QUERY NO: 120 */
INSERT INTO Industry(name)
VALUES
(
'Real Estate'
);

/* INSERT QUERY NO: 121 */
INSERT INTO Industry(name)
VALUES
(
'Recreational Facilities and Services'
);

/* INSERT QUERY NO: 122 */
INSERT INTO Industry(name)
VALUES
(
'Religious Institutions'
);

/* INSERT QUERY NO: 123 */
INSERT INTO Industry(name)
VALUES
(
'Renewables & Environment'
);

/* INSERT QUERY NO: 124 */
INSERT INTO Industry(name)
VALUES
(
'Research'
);

/* INSERT QUERY NO: 125 */
INSERT INTO Industry(name)
VALUES
(
'Restaurants'
);

/* INSERT QUERY NO: 126 */
INSERT INTO Industry(name)
VALUES
(
'Retail'
);

/* INSERT QUERY NO: 127 */
INSERT INTO Industry(name)
VALUES
(
'Security and Investigations'
);

/* INSERT QUERY NO: 128 */
INSERT INTO Industry(name)
VALUES
(
'Semiconductors'
);

/* INSERT QUERY NO: 129 */
INSERT INTO Industry(name)
VALUES
(
'Shipbuilding'
);

/* INSERT QUERY NO: 130 */
INSERT INTO Industry(name)
VALUES
(
'Sporting Goods'
);

/* INSERT QUERY NO: 131 */
INSERT INTO Industry(name)
VALUES
(
'Sports'
);

/* INSERT QUERY NO: 132 */
INSERT INTO Industry(name)
VALUES
(
'Staffing and Recruiting'
);

/* INSERT QUERY NO: 133 */
INSERT INTO Industry(name)
VALUES
(
'Supermarkets'
);

/* INSERT QUERY NO: 134 */
INSERT INTO Industry(name)
VALUES
(
'Telecommunications'
);

/* INSERT QUERY NO: 135 */
INSERT INTO Industry(name)
VALUES
(
'Textiles'
);

/* INSERT QUERY NO: 136 */
INSERT INTO Industry(name)
VALUES
(
'Think Tanks'
);

/* INSERT QUERY NO: 137 */
INSERT INTO Industry(name)
VALUES
(
'Tobacco'
);

/* INSERT QUERY NO: 138 */
INSERT INTO Industry(name)
VALUES
(
'Translation and Localization'
);

/* INSERT QUERY NO: 139 */
INSERT INTO Industry(name)
VALUES
(
'Transportation/Trucking/Railroad'
);

/* INSERT QUERY NO: 140 */
INSERT INTO Industry(name)
VALUES
(
'Utilities'
);

/* INSERT QUERY NO: 141 */
INSERT INTO Industry(name)
VALUES
(
'Venture Capital & Private Equity'
);

/* INSERT QUERY NO: 142 */
INSERT INTO Industry(name)
VALUES
(
'Veterinary'
);

/* INSERT QUERY NO: 143 */
INSERT INTO Industry(name)
VALUES
(
'Warehousing'
);

/* INSERT QUERY NO: 144 */
INSERT INTO Industry(name)
VALUES
(
'Wholesale'
);

/* INSERT QUERY NO: 145 */
INSERT INTO Industry(name)
VALUES
(
'Wine and Spirits'
);

/* INSERT QUERY NO: 146 */
INSERT INTO Industry(name)
VALUES
(
'Wireless'
);

/* INSERT QUERY NO: 147 */
INSERT INTO Industry(name)
VALUES
(
'Writing and Editing'
);
