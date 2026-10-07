import type { Schema, Struct } from '@strapi/strapi';

export interface EnlacesEnlaces extends Struct.ComponentSchema {
  collectionName: 'components_enlaces_enlaces';
  info: {
    displayName: 'enlaces';
  };
  attributes: {
    categorias: Schema.Attribute.String;
    contacto: Schema.Attribute.String;
    home: Schema.Attribute.String;
    producto_info: Schema.Attribute.String;
    productos: Schema.Attribute.String;
    sobre_nosotros: Schema.Attribute.String;
  };
}

export interface PublicDireccion extends Struct.ComponentSchema {
  collectionName: 'components_public_direccions';
  info: {
    displayName: 'Direcci\u00F3n';
  };
  attributes: {
    calle: Schema.Attribute.String;
    Ciudad: Schema.Attribute.String;
    email_empresa: Schema.Attribute.Email;
    provincia: Schema.Attribute.String;
  };
}

export interface PublicLogin extends Struct.ComponentSchema {
  collectionName: 'components_public_logins';
  info: {
    displayName: 'Login';
    icon: 'dashboard';
  };
  attributes: {
    email_login: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<'email@email.com'>;
  };
}

export interface PublicNav extends Struct.ComponentSchema {
  collectionName: 'components_public_navs';
  info: {
    displayName: 'nav';
  };
  attributes: {
    enlace_publico: Schema.Attribute.Component<'enlaces.enlaces', false>;
    login_user: Schema.Attribute.Component<'public.login', true>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_banners';
  info: {
    displayName: 'Hero Banner';
  };
  attributes: {
    bg_image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button_link: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedProductGrid extends Struct.ComponentSchema {
  collectionName: 'components_shared_product_grids';
  info: {
    displayName: 'Product Grid';
    icon: 'dashboard';
  };
  attributes: {
    categoria: Schema.Attribute.String;
    categoria_slug: Schema.Attribute.String;
    limite: Schema.Attribute.Integer;
    text_block: Schema.Attribute.Blocks;
  };
}

export interface SharedProducts extends Struct.ComponentSchema {
  collectionName: 'components_shared_products';
  info: {
    displayName: 'Products';
  };
  attributes: {
    bt_link: Schema.Attribute.String;
    cuantity: Schema.Attribute.Integer;
    description: Schema.Attribute.Text;
    price: Schema.Attribute.Integer;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'enlaces.enlaces': EnlacesEnlaces;
      'public.direccion': PublicDireccion;
      'public.login': PublicLogin;
      'public.nav': PublicNav;
      'shared.hero-banner': SharedHeroBanner;
      'shared.media': SharedMedia;
      'shared.product-grid': SharedProductGrid;
      'shared.products': SharedProducts;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
