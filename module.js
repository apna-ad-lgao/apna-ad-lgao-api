const { AUTH_ERRORS, AUTH_SUCCESS, EXCEPTIONS, HTTP_STATUS_CODES } = require('./errors/error.js');
const { gql, makeExecutableSchema } = require('apollo-server-fastify');
// address
const { activateAddress, createAddress, deleteAddress, existAddress, getAddress, getAllAddress, updateAddress } = require('./modals/address/function');
// banner
const { activateBanner, createBanner, deleteBanner, existBanner, getBanner, getAllBanner, updateBanner } = require('./modals/banner/function');
// campaign
const { activateCampaign, createCampaign, deleteCampaign, existCampaign, getCampaign, getAllCampaign, updateCampaign } = require('./modals/campaign/function');
// campaignTags
const { activateCampaignTags, createCampaignTags, deleteCampaignTags, existCampaignTags, getCampaignTags, getAllCampaignTags, updateCampaignTags } = require('./modals/campaignTags/function');
// category
const { activateCategory, createCategory, deleteCategory, existCategory, getCategory, getAllCategory, updateCategory } = require('./modals/category/function');
// company
const { activateCompany, createCompany, deleteCompany, existCompany, getCompany, getAllCompany,
  updateCompany } = require('./modals/company/function');
// country
const { createCountry, existCountry, getCountry, getAllCountries, getCountries, updateCountry
} = require('./modals/country/function');
// device
const { activateDevice, createDevice, deleteDevice, existDevice, getDevice, getAllDevice,
  updateDevice } = require('./modals/device/function');
// industry
const { activateIndustry, createIndustry, deleteIndustry, existIndustry, getIndustry, getAllIndustry,
  updateIndustry } = require('./modals/industry/function');
// mediaType
const { activateMediaType, createMediaType, deleteMediaType, existMediaType, getMediaType, 
  getAllMediaType, updateMediaType } = require('./modals/mediaType/function');
// order history
const { activateOrderHistory, createOrderHistory, deleteOrderHistory, existOrderHistory, getOrderHistory,
  getAllOrderHistory, updateOrderHistory } = require('./modals/orderHistory/function');
// state
const { activateState, createState, deleteState, existState, getState, updateState,
getAllState, getAllActiveState, getAllCountryState, getAllActiveCountryState} = require('./modals/state/function');
// tags
const { activateTags, createTags, deleteTags, existTags, getTags, getAllTags, updateTags
} = require('./modals/tags/function');
// user
const { activateUser, createUser, deleteUser, existUser, getUser, updateUser
} = require('./modals/user/function');
// userCompany
const { activateUserCompany, createUserCompany, deleteUserCompany, existUserCompany, getUserCompany, getAllUserCompany, updateUserCompany
} = require('./modals/userCompany/function');
// userCompany
const { activateUserDevice, createUserDevice, deleteUserDevice, existUserDevice, getUserDevice, getAllUserDevice, updateUserDevice
} = require('./modals/userDevice/function');

// The GraphQL schema
const typeDefs = gql`
  type Address {
    id: Int
    name: String
    building: String
    landmark: String
    street: String
    pincode: Int
    stateId: Int
    isAdmin: Boolean
    isHidden: Boolean
    created: String
    updated: String
  }
  type Banner {
    id: Int
    name: String
    description: String
    image: String
    addressId: Int
    latitude: Int
    longitude: Int
    industryId: Int
    categoryId: Int
    mediaTypeId: Int
    ainNumber: Int
    facingFrom: String
    towardsTo: String
    size: String
    sft: Int
    isLightning: Boolean
    isDigital: Boolean
    price: Int
    currencyId: Int
    bookingStartDate: String
    bookingEndDate: String
    activeStartDate:  String
    activeEndDate: String
    isHidden: Boolean
    created: String
    updated: String
  }
  type Campaign {
    id: Int
    name: String
    description: String
    isHidden: Boolean
    created: String
    updated: String
  }
  type CampaignTags {
    id: Int
    campaignId: Int
    tagsId: Int
    isHidden: Boolean
    created: String
    updated: String
  }
  type Category {
    id: Int
    name: String
    isHidden: Boolean
    created: String
    updated: String
  }
  type Company {
    id: Int
    name: String
    description: String
    image: String
    isParentCompany: Boolean
    addressId: Int
    latitude: Int
    longitude: Int
    industryId: Int
    gst: String
    angellist: String 
    discord: String
    facebook: String
    github: String
    google: String
    instagram: String
    justdial: String
    linkedin: String
    pinterest: String
    slack: String
    tiktok: String
    twitter: String
    web: String
    youtube: String
    isActive: Boolean
    isHidden: Boolean
    created: String
    updated: String    
  }
  type Country {
    id: Int
    name: String
    alpha2code: String
    alpha3code: String
    isonumeric: String
    continent: String
  }
  type Device {
    id: Int
    uuid: Int
    model: String
    platform: String
    fingerprint: String
    isHidden: Boolean
    created: String
    updated: String
  }
  type Industry {
    id: Int
    name: String
    isHidden: Boolean
    created: String
    updated: String
  }
  type MediaType {
    id: Int
    name: String
    isHidden: Boolean
    created: String
    updated: String
  }
  type OrderHistory {
    id: Int
    total: Int
    status: String
    fromDate: String
    toDate: String
    userId: Int
    bannerId: Int
    isHidden: Boolean
    created: String
    updated: String
  }
  type State {
    id: Int
    name: String
    countryId: Int 
    loccode: String
    status: String
    isHidden: Boolean
    created: String
    updated: String
  }
  type Tags {
    name: String
    isHidden: Boolean
    created: String
    updated: String
  }
  type User {
    id: Int
    name: String
    mobile: String
    email: String
    password: String
    image: String
    isAdmin: Boolean
    isPartner: Boolean
    isHidden: Boolean
    created: String
    updated: String
  }
  type UserCompany {
    id: Int
    userId: Int
    companyId: Int
    isOwner: Boolean
    isMarketer: Boolean
    isHidden: Boolean
    created: String
    updated: String 
  }
  type UserDevice {
    id: Int
    userId: Int
    deviceId: Int
    isHidden: Boolean
    created: String
    updated: String 
  }
  type Query {
    # address
    addresses(id: Int, name: String, building: String, landmark: String, street: String, pincode: Int,
    stateId: Int, isAdmin: Int, isHidden: Boolean, created: String, updated: String): [Address]
    # banner
    banners(id: Int, name: String, description: String, image: String, addressId: Int, industryId: Int, categoryId: Int, 
    mediaTypeId: Int, ainNumber: Int, facingFrom: String, towardsTo: String,size: String, sft: Int, isLightning: Boolean, isDigital: Boolean, price: Int, currencyId: Int, bookingStartDate: String,
    bookingEndDate: String, activeStartDate:  String, activeEndDate: String, isHidden: Boolean, created: String,
    updated: String): [Banner]
    # campaign
    campaigns(id: Int, name: String, description: String, isHidden: Boolean, created: String, updated: String): [Campaign]
    # campaignTags
    campaignTags(id: Int, campaignId: Int, tagsId: Int, isHidden: Boolean, created: String, updated: String): [CampaignTags]
    # category
    categories(id: Int, name: String, isHidden: Boolean, created: String, updated: String): [Category]
    # company
    companies(id: Int, name: String, description: String, image: String, isParentCompany: Boolean, addressId: Int, latitude: Int, longitude: Int,
    industryId: Int, gst: String, angellist: String, discord: String, facebook: String, github: String, google: String, instagram: String,
    justdial: String, linkedin: String, pinterest: String, slack: String, tiktok: String, twitter: String, web: String, youtube: String,
    isActive: Boolean, isHidden: Boolean, created: String, updated: String): [Company] 
    # country
    countries(id: Int, name: String, alpha2code: String, alpha3code: String, isonumeric: String, continent: String): [Country]
    # device
    devices(id: Int, uuid: Int, model: String, platform: String, fingerprint: String, isHidden: Boolean,
    created: String, updated: String): [Device]
    # industry
    industries(name: String, isHidden: Boolean, created: String, updated: String): [Industry]
    # mediaType
    mediaTypes(name: String, isHidden: Boolean, created: String, updated: String): [MediaType]
    # orderHistory
    orderHistories(id: Int, total: Int, status: String, fromDate: String, toDate: String, userId: Int, bannerId: Int, isHidden: Boolean, created: String, updated: String): [OrderHistory]
    # state
    states(id: Int, name: String, countryId: Int, loccode: String, status: String, isHidden: Boolean, created: String, updated: String): [State]
    # tags
    tags(id: Int, name: String, isHidden: Boolean, created: String, updated: String): [Tags]
    # user
    users(id: Int, name: String, mobile: String, email: String, password: String, image: String, isAdmin: Boolean, isPartner: Boolean, isHidden: Boolean, created: String,updated: String): [User]
    # usercomapny
    userCompanies(id: Int, userId: Int, companyId: Int, isOwner: Boolean, isMarketer: Boolean, isHidden: Boolean, created: String, updated: String): [UserCompany]
    # userDevice
    userDevices(id: Int, userId: Int, deviceId: Int, isHidden: Boolean, created: String, updated: String): [UserDevice]
  }
  type Mutation {
    # address
    createAddress(name: String, building: String, landmark: String, street: String, pincode: Int, stateId: Int
    isAdmin: Boolean): Address
    updateAddress(name: String, building: String, landmark: String, street: String, pincode: Int, stateId: Int
    isAdmin: Boolean, isHidden: Boolean): Address
    # banner
    createBanner(name: String, description: String, image: String, addressId: Int, industryId: Int, categoryId: Int, mediaTypeId: Int,
    ainNumber: Int, facingFrom: String, towardsTo: String, size: String, sft: Int): Banner
    updateBanner(id: Int, name: String, description: String, image: String, addressId: Int, latitude: Int, longitude: Int,
    industryId: Int, categoryId: Int, mediaTypeId: Int, ainNumber: Int, facingFrom: String, towardsTo: String,
    size: String, sft: Int, isLightning: Boolean, isDigital: Boolean, price: Int, currencyId: Int, bookingStartDate: String,
    bookingEndDate: String, activeStartDate:  String, activeEndDate: String, isHidden: Boolean, created: String,
    updated: String): Banner
    # campaign
    createCampaign(name: String, description: String): Campaign
    updateCampaign(name: String, description: String, isHidden: Boolean): Campaign
    # campaignTags
    createCampaignTags(campaignId: Int, tagsId: Int): CampaignTags
    updateCampaignTags(campaignId: Int, tagsId: Int, isHidden: Boolean): CampaignTags
    # category
    createCategory(name: String): Category
    updateCategory(name: String, isHidden: Boolean): Category
    # company
    createCompany(name: String, description: String, image: String, isParentCompany: Boolean, addressId: Int): Company
    updateCompany(id: Int, name: String, description: String, image: String, isParentCompany: Boolean, addressId: Int, latitude: Int, longitude: Int,
    industryId: Int, gst: String, angellist: String, discord: String, facebook: String, github: String, google: String, instagram: String,
    justdial: String, linkedin: String, pinterest: String, slack: String, tiktok: String, twitter: String, web: String, youtube: String,
    isActive: Boolean, isHidden: Boolean, created: String, updated: String): Company
    # country
    createCountry(name: String, alpha2code: String, alpha3code: String, isonumeric: String, continent: String): Country
    updateCountry(name: String, alpha2code: String, alpha3code: String, isonumeric: String, continent: String): Country
    # device
    createDevice(uuid: Int, model: String, platform: String, fingerprint: String): MediaType
    updateDevice(fingerprint: String, isHidden: Boolean): MediaType
    # industry
    createIndustry(name: String): Industry
    updateIndustry(name: String, isHidden: Boolean): Industry
    # mediaType
    createMediaType(name: String): MediaType
    updateMediaType(name: String, isHidden: Boolean): MediaType
    # orderHistory
    createOrderHistory(id: Int, total: Int, status: String, fromDate: String, toDate: String, userId: Int, bannerId: Int,
    isHidden: Boolean, created: String, updated: String): OrderHistory
    updateOrderHistory(id: Int, total: Int, status: String, fromDate: String, toDate: String, userId: Int, bannerId: Int,
    isHidden: Boolean, created: String, updated: String): OrderHistory
    deleteOrderHistory(ids: [Int]): [OrderHistory]
    # state
    createState(name: String, countryId: Int, loccode: String, status: String): State
    updateState(name: String, countryId: Int, loccode: String, status: String): State
    # tags
    createTags(name: String): Tags
    deleteTags(ids: [Int]): [Tags]
    updateTags(id: Int, name: String, isHidden: Boolean): Tags
    # user
    activateUser(userId: Int!): User
    createUser(email: String!, password: String!, mobile: String!, name: String!): User
    deleteUser(userId: Int!): User
    updateUser(id: Int!): User
    # userCompany
    createUserCompany(userId: Int, companyId: Int): UserCompany
    updateUserCompany(id: Int!, userId: Int!, companyId: Int!): UserCompany
    # userDevice
    createUserDevice(userId: Int, deviceId: Int): UserDevice
    updateUserDevice(id: Int!, deviceId: Int!): UserDevice
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    // address
    addresses: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        if (!profile.isHidden && profile.isAdmin) {
          data = getAllAddress(DB, args);
        }
      } catch(ex) {
        data = ex.message; 
      }
      return data;
    },
    // banner
    banners: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        if (!profile.isHidden) {
          data = getAllBanner(DB, args);
        }
      } catch(ex) {
        data = ex.message; 
      }
      return data;
    },
    // categories
    categories: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        data = getAllCategory(DB, args);
      } catch(ex) {
        data = ex.message; 
      }
      return data;
    },
    // companies
    companies: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        data = getAllCompany(DB, args);
      } catch(ex) {
        data = ex.message; 
      }
      return data;
    },
    // country
    countries: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        data = getAllCountries(DB, args);
      } catch(ex) {
        data = ex.message; 
      }
      return data;
    },
    // devices
    devices: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        data = getAllDevice(DB, args);
      } catch(ex) {
        data = ex.message; 
      }
      return data;
    },
    // industries
    industries: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        data = getAllIndustry(DB, args);
      } catch(ex) {
        data = ex.message; 
      }
      return data;
    },
    // mediaType
    mediaTypes: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        data = getAllMediaType(DB, args);
      } catch(ex) {
        data = ex.message; 
      }
      return data;
    },        
    // state
    states: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        data = getAllState(DB, args);
      } catch(ex) {
        data = ex.message; 
      }
      return data;
    },
    // tags
    tags: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        data = getAllTags(DB, args);
      } catch(ex) {
        data = ex.message; 
      }
      return data;
    },
    // user
    users: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        if(profile.isAdmin) {
          data = await DB.models.User.findAll({
            where: args
          });
        }
      } catch(ex) {
        data = ex.message; 
      }
      return data;
    },
    // userCompany
    userCompanies: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        data = getAllUserCompany(DB, args);
      } catch(ex) {
        data = ex.message; 
      }
      return data;
    },
    // userDevice
    userDevices: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        data = await getAllUserDevice(DB, args);
      } catch(ex) {
        data = ex.message; 
      }
      return data;
    },
  },
  Mutation: {
    // address
    createAddress: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { name, building, landmark, street, pincode, stateId, isAdmin} = args;
        if (!name || !building || !landmark || !street || !pincode || !stateId) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        if (!profile.isHidden) {
          data = await createAddress(DB, name, building, landmark, street, pincode, stateId, isAdmin);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    updateAddress: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { id, name, building, landmark, street, pincode, stateId, isAdmin, isHidden } = args;
        if (!profile.isHidden && id) {
          data = await updateAddress(DB, id, { name, building, landmark, street, pincode, stateId, isAdmin, isHidden });
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    // banner
    createBanner: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { name, description, image, addressId, industryId, categoryId, mediaTypeId,
          ainNumber, facingFrom, towardsTo, size, sft } = args;
        if (!name || !description || !image || !addressId || !industryId || !categoryId || !mediaTypeId || !ainNumber
          || !facingFrom || !towardsTo || !size || !sft) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        if (!profile.isHidden && (profile.isAdmin || profile.isOwner || profile.isPartner)) {
          data = await createBanner(DB, name, description, image, addressId, industryId, categoryId, mediaTypeId,
            ainNumber, facingFrom, towardsTo, size, sft);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    updateBanner: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { id, name, description, image,  addressId, industryId, categoryId, mediaTypeId,
          ainNumber, facingFrom, towardsTo, size, sft, isHidden } = args;
        if (!profile.isHidden && (profile.isAdmin || profile.isOwner || profile.isPartner) && id) {
          data = await updateBanner(DB, id, { name, description, name, description, image, addressId, industryId,
            categoryId, mediaTypeId, ainNumber, facingFrom, towardsTo, size, sft, isHidden });
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    }, 
    // campaign
    createCampaign: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { name, description } = args;
        if (!name || !description) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        if (profile.isAdmin || profile.isOwner || profile.isPartner) {
          data = await createCampaign(DB, name, description);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    updateCampaign: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { id, name, description, isHidden } = args;
        if ((profile.isAdmin || profile.isOwner || profile.isPartner) && id) {
          data = await updateCampaign(DB, id, { name, description, isHidden });
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    }, 
    // campaignTags
    createCampaignTags: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { campaignId, tagsId } = args;
        if (!name) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        if (profile.isAdmin || profile.isOwner || profile.isPartner) {
          data = await createCampaignTags(DB, campaignId, tagsId);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    updateCampaignTags: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { id, campaignId, tagsId, isHidden } = args;
        if ((profile.isAdmin || profile.isOwner || profile.isPartner) && id) {
          data = await updateCampaignTags(DB, id, { campaignId, tagsId, isHidden });
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },    
    // category
    createCategory: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { name } = args;
        if (!name) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        if (profile.isAdmin) {
          data = await createCategory(DB, name);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    updateCategory: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { id, name, isHidden } = args;
        if (profile.isAdmin && id) {
          data = await updateCategory(DB, id, { name, isHidden });
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    // company
    createCompany: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { name, description, image, isParentCompany, addressId } = args;
        if (!name || !description || !image || !isParentCompany || !addressId) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        if (!profile.isHidden || profile.isAdmin) {
          data = await createCompany(DB, name, description, image, isParentCompany, addressId);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    updateCompany: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { id, name, description, image, isParentCompany, addressId, isHidden } = args;
        if ((!profile.isHidden || profile.isAdmin) && id) {
          data = await updateCompany(DB, id, { name, description, image, isParentCompany, addressId, isHidden });
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    // country
    createCountry: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { name, alpha2code, alpha3code, isonumeric, continent } = args;
        if (name || alpha2code || alpha3code || isonumeric || continent) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        data = await createCountry(DB, name, alpha2code, alpha3code, isonumeric, continent);
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    updateCountry: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { id, name, alpha2code, alpha3code, isonumeric, continent } = args;
        if (profile.isAdmin && id) {
          data = await updateOrderHistory(DB, name, { alpha2code, alpha3code, isonumeric, continent });
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    // device
    createDevice: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { uuid, model, platform, fingerprint } = args;
        if (!uuid || !model || !platform || !fingerprint) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        data = await createDevice(DB, uuid, model, platform, fingerprint);
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    updateDevice: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { id, fingerprint } = args;
        if (!fingerprint) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        data = await updateDevice(DB, id, {fingerprint});
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    // industry
    createIndustry: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { name } = args;
        if (!name) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        if (profile && profile.isAdmin) {
          data = await createIndustry(DB, name);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    updateIndustry: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { id, name } = args;
        if (!name || !id) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        if (profile && profile.isAdmin) {
          data = await updateIndustry(DB, id, {name});
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },    
    // mediaType
    createMediaType: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { name } = args;
        if (!name) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        if (profile && profile.isAdmin) {
          data = await createMediaType(DB, name);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    updateMediaType: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { id, name } = args;
        if (!name || !id) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        if (profile && profile.isAdmin) {
          data = await updateMediaType(DB, id, {name});
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    // orderHistory
    createOrderHistory: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { total, status, fromDate, toDate, userId, bannerId } = args;
        if (!total || !status || !fromDate || !toDate || !userId || !bannerId) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        data = await createOrderHistory(DB, total, status, fromDate, toDate, userId, bannerId);
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    deleteOrderHistory: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { ids } = args;
        if (profile.isAdmin && ids) {
          data = await deleteOrderHistory(DB, ids);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    updateOrderHistory: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { id, total, status, fromDate, toDate, userId, bannerId, isHidden } = args;
        if (profile.isAdmin && id) {
          data = await updateOrderHistory(DB, id, { total, status, fromDate, toDate, userId, bannerId, isHidden });
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    // state
    createState: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { name, countryId, loccode, status } = args;
        if (!name || !countryId || !loccode || !status) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        if (profile.isAdmin && name) {
          data = await createState(DB, name, countryId, loccode, status);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    updateState: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { id, name, countryId, loccode, status, isHidden } = args;
        if (profile.isAdmin && id) {
          data = await updateState(DB, id, { name, countryId, loccode, status, isHidden });
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    // tags
    createTags: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { name } = args;
        if (!name) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        if (profile.isAdmin && name) {
          data = await createTags(DB, name);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    deleteTags: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { ids } = args;
        if (!ids) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        if (profile.isAdmin && ids && ids.length > 0) {
          data = await deleteTags(DB, ids);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    updateTags: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { name, id, isHidden } = args;
        if (profile && profile.isAdmin && id && name) {
          data = await updateTags(DB, id, { name, isHidden });
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    // user
    activateUser: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { userId } = args;
        if (profile.isAdmin && userId) {
          data = await activateUser(DB, userId);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    createUser: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { email, password, mobile, name } = args;
        if (!email || !password || !mobile || !name) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        code = AUTH_SUCCESS.ACOUNT_CREATED.code;  
        data = await createUser(DB, email, mobile, name, password);
      } catch(ex) {
        code = HTTP_STATUS_CODES.ERROR;
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    deleteUser: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { userId } = args;
        if (profile.isAdmin && userId) {
          data = await deleteUser(DB, userId);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    updateUser: async(parent, args, context, info) => {
      let data = null;
      try {
        const { DB, profile } = context;
        const { id } = args;
        if (profile.isAdmin && id) {
          data = activateUser(DB, id);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    // userCompany
    createUserCompany: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { userId, companyId } = args;
        if (!userId || !companyId) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        if (userId && companyId) {
          data = await createUserCompany(DB, userId, companyId);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    updateUserCompany: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { id, userId, companyId } = args;
        if (!userId || !companyId) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        // only admin and owner can change userCompany
        if ((profile.isAdmin || (profile.id === userId)) && userId && companyId) {
          data = await updateUserCompany(DB, id, {userId, companyId});
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    // userDevice
    createUserDevice: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { deviceId } = args;
        if (!deviceId) throw new Error(AUTH_ERRORS.INVALID_DETAIL.message);
        if (profile && profile.id & deviceId) {
          data = await createUserDevice(DB, deviceId);
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
    updateUserDevice: async(parent, args, context, info) => {
      let code = null, data = null;
      try {
        const { DB, profile } = context;
        const { deviceId, id } = args;
        if (profile && profile.id & deviceId) {
          data = await updateUserDevice(DB, id, { deviceId });
        }
      } catch(ex) {
        data = { message: ex.message || EXCEPTIONS.SOME_ERROR.message }; 
      }
      return data;
    },
  }
};

module.exports = {
  typeDefs, resolvers
};
