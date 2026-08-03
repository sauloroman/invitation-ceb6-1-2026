import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { Button } from '@/common/components/button/Button'

import bg from '@/assets/images/backgrounds/rsvp.jpeg'
import { ArrowUpRightIcon } from '@phosphor-icons/react'
import logo from '@/assets/images/icons/logo.svg'
import { useDrawer } from '@/common/hooks'
import { DRAWER_NAMES } from '@/store/ui/drawer.slice'

const FLUID_EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const careerContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.55,
        },
    },
}

const careerItemVariants: Variants = {
    hidden: { opacity: 0, x: -25 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.9, ease: FLUID_EASE },
    },
}

export const GraduatesSection: React.FC = () => {
    const { onOpenDrawer } = useDrawer()
    return (
        <section id="graduates" className="graduates">
            <div className="graduates__container">
                <motion.div
                    className="graduates__card"
                    style={{ backgroundImage: `url(${bg})` }}
                    initial={{ opacity: 0, scale: 0.93 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 1.3, delay: 0.15, ease: FLUID_EASE }}
                >
                    <div className="graduates__content">
                        <motion.div
                            className="graduates__logo-container"
                            initial={{ opacity: 0, rotate: -8, scale: 0.85 }}
                            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                            viewport={{ once: true, margin: '-10% 0px' }}
                            transition={{ duration: 1.1, delay: 0.35, ease: FLUID_EASE }}
                        >
                            <img src={logo} alt="CEB 6/1 Logo" className="graduates__logo" />
                        </motion.div>

                        <motion.p
                            className="graduates__sub-message"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-10% 0px' }}
                            transition={{ duration: 1.0, delay: 0.45, ease: FLUID_EASE }}
                        >
                            Con orgullo y gratitud de nuestra institución
                        </motion.p>

                        <div className="graduates__columns">
                            <motion.div
                                className="graduates__col"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-10% 0px' }}
                                transition={{ duration: 1.0, delay: 0.5, ease: FLUID_EASE }}
                            >
                                <p className="graduates__col-label">Centro de Estudios</p>
                                <p className="graduates__col-value">de Bachillerato 6/1</p>
                            </motion.div>
                            <div className="graduates__col-divider" />
                            <motion.div
                                className="graduates__col"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-10% 0px' }}
                                transition={{ duration: 1.0, delay: 0.5, ease: FLUID_EASE }}
                            >
                                <p className="graduates__col-label">Generación</p>
                                <p className="graduates__col-value">2023 - 2026</p>
                            </motion.div>
                        </div>

                        <motion.div
                            className="graduates__careers-list"
                            variants={careerContainerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-10% 0px' }}
                        >
                            <motion.div className="graduates__career-item" variants={careerItemVariants}>
                                <h4 className="graduates__career-name">Tecnologías de la Información y Comunicación</h4>
                                <Button
                                    icon={<ArrowUpRightIcon size={22} />}
                                    variant="outline"
                                    className="graduates__button"
                                    onClick={() => onOpenDrawer(DRAWER_NAMES.tics, 'Tecnologías de la Información y Comunicación')}
                                >
                                    Ver graduados
                                </Button>
                            </motion.div>

                            <motion.div className="graduates__career-item" variants={careerItemVariants}>
                                <div className="graduates__career-divider" />
                                <h4 className="graduates__career-name">Administración</h4>
                                <Button
                                    icon={<ArrowUpRightIcon size={22} />}
                                    variant="outline"
                                    className="graduates__button"
                                    onClick={() => onOpenDrawer(DRAWER_NAMES.administracion, 'Administración')}
                                >
                                    Ver graduados
                                </Button>
                            </motion.div>

                            <motion.div className="graduates__career-item" variants={careerItemVariants}>
                                <div className="graduates__career-divider" />
                                <h4 className="graduates__career-name">Intervención en la Educación Obligatoria</h4>
                                <Button
                                    icon={<ArrowUpRightIcon size={22} />}
                                    variant="outline"
                                    className="graduates__button"
                                    onClick={() => onOpenDrawer(DRAWER_NAMES.intervencion, 'Intervención en la Educación Obligatoria')}
                                >
                                    Ver graduados
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
